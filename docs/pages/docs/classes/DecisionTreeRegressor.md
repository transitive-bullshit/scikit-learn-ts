# DecisionTreeRegressor

A decision tree regressor.

Read more in the [User Guide](../tree.html#tree).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new DecisionTreeRegressor(opts?: DecisionTreeRegressorOptions): DecisionTreeRegressor;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`DecisionTreeRegressorOptions`](../interfaces/DecisionTreeRegressorOptions.md) |

### Returns

[`DecisionTreeRegressor`](DecisionTreeRegressor.md)

Defined in:  [generated/tree/DecisionTreeRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/tree/DecisionTreeRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/tree/DecisionTreeRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/tree/DecisionTreeRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L19)

### id

> `string`

Defined in:  [generated/tree/DecisionTreeRegressor.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L16)

### opts

> `any`

Defined in:  [generated/tree/DecisionTreeRegressor.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L17)

## Accessors

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/tree/DecisionTreeRegressor.ts:452](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L452)

### max\_features\_

The inferred value of max\_features.

#### Signature

```ts
max_features_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/tree/DecisionTreeRegressor.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L398)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/tree/DecisionTreeRegressor.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L425)

### n\_outputs\_

The number of outputs when `fit` is performed.

#### Signature

```ts
n_outputs_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/tree/DecisionTreeRegressor.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L479)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/tree/DecisionTreeRegressor.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L28)

#### Signature

```ts
py(pythonBridge: PythonBridge): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

Defined in: [generated/tree/DecisionTreeRegressor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L32)

### tree\_

The underlying Tree object. Please refer to `help(sklearn.tree.\_tree.Tree)` for attributes of Tree object and [Understanding the decision tree structure](../../auto_examples/tree/plot_unveil_tree_structure.html#sphx-glr-auto-examples-tree-plot-unveil-tree-structure-py) for basic usage of these attributes.

#### Signature

```ts
tree_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/tree/DecisionTreeRegressor.ts:506](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L506)

## Methods

### apply()

Return the index of the leaf that each sample is predicted as.

#### Signature

```ts
apply(opts: DecisionTreeRegressorApplyOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeRegressorApplyOptions`](../interfaces/DecisionTreeRegressorApplyOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/tree/DecisionTreeRegressor.ts:118](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L118)

### cost\_complexity\_pruning\_path()

Compute the pruning path during Minimal Cost-Complexity Pruning.

See [Minimal Cost-Complexity Pruning](../tree.html#minimal-cost-complexity-pruning) for details on the pruning process.

#### Signature

```ts
cost_complexity_pruning_path(opts: DecisionTreeRegressorCostComplexityPruningPathOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeRegressorCostComplexityPruningPathOptions`](../interfaces/DecisionTreeRegressorCostComplexityPruningPathOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/DecisionTreeRegressor.ts:152](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L152)

### decision\_path()

Return the decision path in the tree.

#### Signature

```ts
decision_path(opts: DecisionTreeRegressorDecisionPathOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeRegressorDecisionPathOptions`](../interfaces/DecisionTreeRegressorDecisionPathOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/tree/DecisionTreeRegressor.ts:191](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L191)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/tree/DecisionTreeRegressor.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L101)

### fit()

Build a decision tree regressor from the training set (X, y).

#### Signature

```ts
fit(opts: DecisionTreeRegressorFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeRegressorFitOptions`](../interfaces/DecisionTreeRegressorFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/DecisionTreeRegressor.ts:228](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L228)

### get\_depth()

Return the depth of the decision tree.

The depth of a tree is the maximum distance between the root and any leaf.

#### Signature

```ts
get_depth(opts: DecisionTreeRegressorGetDepthOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeRegressorGetDepthOptions`](../interfaces/DecisionTreeRegressorGetDepthOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/DecisionTreeRegressor.ts:266](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L266)

### get\_n\_leaves()

Return the number of leaves of the decision tree.

#### Signature

```ts
get_n_leaves(opts: DecisionTreeRegressorGetNLeavesOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeRegressorGetNLeavesOptions`](../interfaces/DecisionTreeRegressorGetNLeavesOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/DecisionTreeRegressor.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L296)

### init()

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Signature

```ts
init(py: PythonBridge): Promise<void>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/tree/DecisionTreeRegressor.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L41)

### predict()

Predict class or regression value for X.

For a classification model, the predicted class for each sample in X is returned. For a regression model, the predicted value based on X is returned.

#### Signature

```ts
predict(opts: DecisionTreeRegressorPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeRegressorPredictOptions`](../interfaces/DecisionTreeRegressorPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/tree/DecisionTreeRegressor.ts:330](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L330)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: DecisionTreeRegressorScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeRegressorScoreOptions`](../interfaces/DecisionTreeRegressorScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/tree/DecisionTreeRegressor.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/tree/DecisionTreeRegressor.ts#L364)
