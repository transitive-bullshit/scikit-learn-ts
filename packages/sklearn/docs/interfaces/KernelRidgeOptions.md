# KernelRidgeOptions

## Properties

### alpha?

> `number` \| [`ArrayLike`](../types/ArrayLike.md)

Regularization strength; must be a positive float. Regularization improves the conditioning of the problem and reduces the variance of the estimates. Larger values specify stronger regularization. Alpha corresponds to `1 / (2C)` in other linear models such as [`LogisticRegression`](sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression "sklearn.linear_model.LogisticRegression") or [`LinearSVC`](sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC "sklearn.svm.LinearSVC"). If an array is passed, penalties are assumed to be specific to the targets. Hence they must correspond in number. See [Ridge regression and classification](../linear_model.html#ridge-regression) for formula.

#### Default Value

`1`

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:306](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L306)

### coef0?

> `number`

Zero coefficient for polynomial and sigmoid kernels. Ignored by other kernels.

#### Default Value

`1`

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:332](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L332)

### degree?

> `number`

Degree of the polynomial kernel. Ignored by other kernels.

#### Default Value

`3`

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L325)

### gamma?

> `number`

Gamma parameter for the RBF, laplacian, polynomial, exponential chi2 and sigmoid kernels. Interpretation of the default value is left to the kernel; see the documentation for sklearn.metrics.pairwise. Ignored by other kernels.

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L318)

### kernel?

> `string`

Kernel mapping used internally. This parameter is directly passed to `pairwise\_kernel`. If `kernel` is a string, it must be one of the metrics in `pairwise.PAIRWISE\_KERNEL\_FUNCTIONS` or “precomputed”. If `kernel` is “precomputed”, X is assumed to be a kernel matrix. Alternatively, if `kernel` is a callable function, it is called on each pair of instances (rows) and the resulting value recorded. The callable should take two rows from X as input and return the corresponding kernel value as a single number. This means that callables from [`sklearn.metrics.pairwise`](../classes.html#module-sklearn.metrics.pairwise "sklearn.metrics.pairwise") are not allowed, as they operate on matrices, not single samples. Use the string identifying the kernel instead.

#### Default Value

`'linear'`

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:313](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L313)

### kernel\_params?

> `any`

Additional parameters (keyword arguments) for kernel function passed as callable object.

Defined in:  [generated/kernel\_ridge/KernelRidge.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L337)
