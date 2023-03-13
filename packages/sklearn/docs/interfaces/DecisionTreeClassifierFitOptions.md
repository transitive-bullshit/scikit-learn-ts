# DecisionTreeClassifierFitOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)

The training input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csc\_matrix`.

Defined in:  [generated/tree/DecisionTreeClassifier.ts:800](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L800)

### check\_input?

> `boolean`

Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.

#### Default Value

`true`

Defined in:  [generated/tree/DecisionTreeClassifier.ts:817](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L817)

### sample\_weight?

> [`ArrayLike`](../types/ArrayLike.md)

Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. Splits are also ignored if they would result in any single class carrying a negative weight in either child node.

Defined in:  [generated/tree/DecisionTreeClassifier.ts:810](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L810)

### y?

> [`ArrayLike`](../types/ArrayLike.md)

The target values (class labels) as integers or strings.

Defined in:  [generated/tree/DecisionTreeClassifier.ts:805](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L805)
