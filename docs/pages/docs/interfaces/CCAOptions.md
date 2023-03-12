# CCAOptions

## Properties

### copy?

> `boolean`

Whether to copy `X` and `Y` in fit before applying centering, and potentially scaling. If `false`, these operations will be done inplace, modifying both arrays.

#### Default Value

`true`

Defined in:  [generated/cross\_decomposition/CCA.ts:608](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L608)

### max\_iter?

> `number`

The maximum number of iterations of the power method.

#### Default Value

`500`

Defined in:  [generated/cross\_decomposition/CCA.ts:594](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L594)

### n\_components?

> `number`

Number of components to keep. Should be in `\[1, min(n\_samples, n\_features, n\_targets)\]`.

#### Default Value

`2`

Defined in:  [generated/cross\_decomposition/CCA.ts:580](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L580)

### scale?

> `boolean`

Whether to scale `X` and `Y`.

#### Default Value

`true`

Defined in:  [generated/cross\_decomposition/CCA.ts:587](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L587)

### tol?

> `number`

The tolerance used as convergence criteria in the power method: the algorithm stops whenever the squared norm of `u\_i \- u\_{i-1}` is less than `tol`, where `u` corresponds to the left singular vector.

#### Default Value

`0.000001`

Defined in:  [generated/cross\_decomposition/CCA.ts:601](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cross_decomposition/CCA.ts#L601)
