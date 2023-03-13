# DecisionTreeRegressorFitOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)

The training input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csc\_matrix`.

Defined in:  [generated/tree/DecisionTreeRegressor.ts:653](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L653)

### check\_input?

> `boolean`

Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.

#### Default Value

`true`

Defined in:  [generated/tree/DecisionTreeRegressor.ts:670](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L670)

### sample\_weight?

> [`ArrayLike`](../types/ArrayLike.md)

Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node.

Defined in:  [generated/tree/DecisionTreeRegressor.ts:663](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L663)

### y?

> [`ArrayLike`](../types/ArrayLike.md)

The target values (real numbers). Use `dtype=np.float64` and `order='C'` for maximum efficiency.

Defined in:  [generated/tree/DecisionTreeRegressor.ts:658](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L658)
