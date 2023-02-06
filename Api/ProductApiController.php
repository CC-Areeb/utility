<?php

namespace App\Http\Controllers\Api;

use App\Models\Recipe;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Services\ProductService;
use Illuminate\Http\JsonResponse;
use Illuminate\Contracts\View\View;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\ProductRequest;
use Illuminate\Contracts\View\Factory;
use App\Http\Requests\UpdateProductRequest;
use Illuminate\Contracts\Foundation\Application;

class ProductApiController extends Controller
{
    protected ProductService $productService;
    protected $permission = 'permission:';

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;

        $this->middleware($this->permission . PERMISSION_LIST_PRODUCT)->only(['index']);
        $this->middleware($this->permission . PERMISSION_ADD_PRODUCT)->only(['create', 'store']);
        $this->middleware($this->permission . PERMISSION_EDIT_PRODUCT)->only(['edit', 'update']);
        $this->middleware($this->permission . PERMISSION_DELETE_PRODUCT)->only(['destroy']);
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        $data = Product::get();
        return response([
            'data' => $data,
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Application|Factory|View|Response
     */
    public function create(Request $req)
    {
        if ($req->slug) {
            $product = $this->productService->duplicateProduct($req->slug);
            $data = Recipe::where('product_id', $product->id)->first();
            if (isset($data) && $data->recipe_details !== null) {
                $data = json_decode($data->recipe_details, true);
                return response([
                    'data' => json_decode($data->recipe_details, true),
                ], 200);
            }
        } else {
            return response([
                'data' => 'ERROR (O_o)',
            ], 401);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ProductRequest $request
     * @return JsonResponse
     */
    public function store(ProductRequest $request)
    {
        $storeData = $this->productService->store($request);
        return response([
            'data' => $storeData
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Product $product
     * @return Application|Factory|View|Response
     */
    public function edit($column)
    {
        $editForm = Product::where('slug', $column)->first();
        $data = Recipe::where('product_id', $editForm->id)->first();
        return response()->json([$editForm, $data], 200)->header('Access-Control-Allow-Origin', '*');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateProductRequest $request
     * @param Product $product
     * @return JsonResponse
     */
    public function update(UpdateProductRequest $request, Product $product): JsonResponse
    {
        $update = $this->productService->update($product, $request);
        return response()->json($update, 200);
    }
    /**
     * Remove the specified resource from storage.  
     *
     * @param Product $product
     */
    public function destroy($id)
    {   
        Product::find($id)->delete();
        return response()->json(['message' => 'Resource deleted successfully.'], 200);
    }

    public function getProduct(Request $request): JsonResponse
    {
        $products = $this->productService->getProduct($request);
        return response()->json(["html" => $products]);
    }

    public function getProductPreview(Request $request): JsonResponse
    {
        $response = $this->productService->getProductPreview($request->all());
        return response()->json(["html" => $response]);
    }
}
