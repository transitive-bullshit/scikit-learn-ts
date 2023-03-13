# FactorAnalysisOptions

## Properties

### copy?

> `boolean`

Whether to make a copy of X. If `false`, the input X gets overwritten during fitting.

#### Default Value

`true`

Defined in:  [generated/decomposition/FactorAnalysis.ts:583](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L583)

### iterated\_power?

> `number`

Number of iterations for the power method. 3 by default. Only used if `svd\_method` equals ‘randomized’.

#### Default Value

`3`

Defined in:  [generated/decomposition/FactorAnalysis.ts:609](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L609)

### max\_iter?

> `number`

Maximum number of iterations.

#### Default Value

`1000`

Defined in:  [generated/decomposition/FactorAnalysis.ts:590](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L590)

### n\_components?

> `number`

Dimensionality of latent space, the number of components of `X` that are obtained after `transform`. If `undefined`, n\_components is set to the number of features.

Defined in:  [generated/decomposition/FactorAnalysis.ts:569](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L569)

### noise\_variance\_init?

> [`ArrayLike`](../types/ArrayLike.md)

The initial guess of the noise variance for each feature. If `undefined`, it defaults to np.ones(n\_features).

Defined in:  [generated/decomposition/FactorAnalysis.ts:595](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L595)

### random\_state?

> `number`

Only used when `svd\_method` equals ‘randomized’. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Default Value

`0`

Defined in:  [generated/decomposition/FactorAnalysis.ts:621](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L621)

### rotation?

> `"varimax"` \| `"quartimax"`

If not `undefined`, apply the indicated rotation. Currently, varimax and quartimax are implemented. See [“The varimax criterion for analytic rotation in factor analysis”](https://link.springer.com/article/10.1007%2FBF02289233) H. F. Kaiser, 1958.

Defined in:  [generated/decomposition/FactorAnalysis.ts:614](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L614)

### svd\_method?

> `"randomized"` \| `"lapack"`

Which SVD method to use. If ‘lapack’ use standard SVD from scipy.linalg, if ‘randomized’ use fast `randomized\_svd` function. Defaults to ‘randomized’. For most applications ‘randomized’ will be sufficiently precise while providing significant speed gains. Accuracy can also be improved by setting higher values for `iterated\_power`. If this is not sufficient, for maximum precision you should choose ‘lapack’.

#### Default Value

`'randomized'`

Defined in:  [generated/decomposition/FactorAnalysis.ts:602](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L602)

### tol?

> `number`

Stopping tolerance for log-likelihood increase.

#### Default Value

`0.01`

Defined in:  [generated/decomposition/FactorAnalysis.ts:576](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/FactorAnalysis.ts#L576)
