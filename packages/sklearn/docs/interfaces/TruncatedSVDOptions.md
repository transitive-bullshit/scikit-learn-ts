# TruncatedSVDOptions

## Properties

### algorithm?

> `"randomized"` \| `"arpack"`

SVD solver to use. Either “arpack” for the ARPACK wrapper in SciPy (scipy.sparse.linalg.svds), or “randomized” for the randomized algorithm due to Halko (2009).

#### Default Value

`'randomized'`

Defined in:  [generated/decomposition/TruncatedSVD.ts:458](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L458)

### n\_components?

> `number`

Desired dimensionality of output data. If algorithm=’arpack’, must be strictly less than the number of features. If algorithm=’randomized’, must be less than or equal to the number of features. The default value is useful for visualisation. For LSA, a value of 100 is recommended.

#### Default Value

`2`

Defined in:  [generated/decomposition/TruncatedSVD.ts:451](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L451)

### n\_iter?

> `number`

Number of iterations for randomized SVD solver. Not used by ARPACK. The default is larger than the default in [`randomized\_svd`](sklearn.utils.extmath.randomized_svd.html#sklearn.utils.extmath.randomized_svd "sklearn.utils.extmath.randomized_svd") to handle sparse matrices that may have large slowly decaying spectrum.

#### Default Value

`5`

Defined in:  [generated/decomposition/TruncatedSVD.ts:465](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L465)

### n\_oversamples?

> `number`

Number of oversamples for randomized SVD solver. Not used by ARPACK. See [`randomized\_svd`](sklearn.utils.extmath.randomized_svd.html#sklearn.utils.extmath.randomized_svd "sklearn.utils.extmath.randomized_svd") for a complete description.

#### Default Value

`10`

Defined in:  [generated/decomposition/TruncatedSVD.ts:472](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L472)

### power\_iteration\_normalizer?

> `"auto"` \| `"QR"` \| `"LU"` \| `"none"`

Power iteration normalizer for randomized SVD solver. Not used by ARPACK. See [`randomized\_svd`](sklearn.utils.extmath.randomized_svd.html#sklearn.utils.extmath.randomized_svd "sklearn.utils.extmath.randomized_svd") for more details.

#### Default Value

`'auto'`

Defined in:  [generated/decomposition/TruncatedSVD.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L479)

### random\_state?

> `number`

Used during randomized svd. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/decomposition/TruncatedSVD.ts:484](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L484)

### tol?

> `number`

Tolerance for ARPACK. 0 means machine precision. Ignored by randomized SVD solver.

#### Default Value

`0`

Defined in:  [generated/decomposition/TruncatedSVD.ts:491](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/TruncatedSVD.ts#L491)
