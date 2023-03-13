# NeighborhoodComponentsAnalysisOptions

## Properties

### callback?

> `any`

If not `undefined`, this function is called after every iteration of the optimizer, taking as arguments the current solution (flattened transformation matrix) and the number of iterations. This might be useful in case one wants to examine or store the transformation found after each iteration.

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:468](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L468)

### init?

> [`ArrayLike`](../types/ArrayLike.md)[] \| `"auto"` \| `"random"` \| `"identity"` \| `"pca"` \| `"lda"`

Initialization of the linear transformation. Possible options are `'auto'`, `'pca'`, `'lda'`, `'identity'`, `'random'`, and a numpy array of shape `(n\_features\_a, n\_features\_b)`.

#### Default Value

`'auto'`

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L442)

### max\_iter?

> `number`

Maximum number of iterations in the optimization.

#### Default Value

`50`

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L456)

### n\_components?

> `number`

Preferred dimensionality of the projected space. If `undefined` it will be set to `n\_features`.

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L435)

### random\_state?

> `number`

A pseudo random number generator object or a seed for it if int. If `init='random'`, `random\_state` is used to initialize the random transformation. If `init='pca'`, `random\_state` is passed as an argument to PCA when initializing the transformation. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L480)

### tol?

> `number`

Convergence tolerance for the optimization.

#### Default Value

`0.00001`

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:463](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L463)

### verbose?

> `number`

If 0, no progress messages will be printed. If 1, progress messages will be printed to stdout. If > 1, progress messages will be printed and the `disp` parameter of [`scipy.optimize.minimize`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html#scipy.optimize.minimize "(in SciPy v1.10.1)") will be set to `verbose \- 2`.

#### Default Value

`0`

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:475](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L475)

### warm\_start?

> `boolean`

If `true` and [`fit`](#sklearn.neighbors.NeighborhoodComponentsAnalysis.fit "sklearn.neighbors.NeighborhoodComponentsAnalysis.fit") has been called before, the solution of the previous call to [`fit`](#sklearn.neighbors.NeighborhoodComponentsAnalysis.fit "sklearn.neighbors.NeighborhoodComponentsAnalysis.fit") is used as the initial linear transformation (`n\_components` and `init` will be ignored).

#### Default Value

`false`

Defined in:  [generated/neighbors/NeighborhoodComponentsAnalysis.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NeighborhoodComponentsAnalysis.ts#L449)
