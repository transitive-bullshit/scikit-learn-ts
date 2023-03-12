# PairwiseKernelOptions

## Properties

### gamma?

> `number`

Parameter gamma of the pairwise kernel specified by metric. It should be positive.

#### Default Value

`1`

Defined in:  [generated/gaussian\_process/kernels/PairwiseKernel.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L249)

### gamma\_bounds?

> `"fixed"`

The lower and upper bound on ‘gamma’. If set to “fixed”, ‘gamma’ cannot be changed during hyperparameter tuning.

Defined in:  [generated/gaussian\_process/kernels/PairwiseKernel.ts:254](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L254)

### metric?

> `"sigmoid"` \| `"linear"` \| `"poly"` \| `"rbf"` \| `"cosine"` \| `"additive_chi2"` \| `"chi2"` \| `"polynomial"` \| `"laplacian"`

The metric to use when calculating kernel between instances in a feature array. If metric is a string, it must be one of the metrics in pairwise.PAIRWISE\_KERNEL\_FUNCTIONS. If metric is “precomputed”, X is assumed to be a kernel matrix. Alternatively, if metric is a callable function, it is called on each pair of instances (rows) and the resulting value recorded. The callable should take two arrays from X as input and return a value indicating the distance between them.

#### Default Value

`'linear'`

Defined in:  [generated/gaussian\_process/kernels/PairwiseKernel.ts:261](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L261)

### pairwise\_kernels\_kwargs?

> `any`

All entries of this dict (if any) are passed as keyword arguments to the pairwise kernel function.

Defined in:  [generated/gaussian\_process/kernels/PairwiseKernel.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L275)
