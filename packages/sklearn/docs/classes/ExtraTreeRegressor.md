# ExtraTreeRegressor

An extremely randomized tree regressor.

Extra-trees differ from classic decision trees in the way they are built. When looking for the best split to separate the samples of a node into two groups, random splits are drawn for each of the `max\_features` randomly selected features and the best split among those is chosen. When `max\_features` is set 1, this amounts to building a totally random decision tree.

Warning: Extra-trees should only be used within ensemble methods.

Read more in the [User Guide](../tree.html#tree).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.tree.ExtraTreeRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new ExtraTreeRegressor(opts?: ExtraTreeRegressorOptions): ExtraTreeRegressor;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ExtraTreeRegressorOptions`](../interfaces/ExtraTreeRegressorOptions.md) |

### Returns

[`ExtraTreeRegressor`](ExtraTreeRegressor.md)

Defined in:  [generated/tree/ExtraTreeRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/tree/ExtraTreeRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/tree/ExtraTreeRegressor.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/tree/ExtraTreeRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L23)

### id

> `string`

Defined in:  [generated/tree/ExtraTreeRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L20)

### opts

> `any`

Defined in:  [generated/tree/ExtraTreeRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L21)

## Accessors

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/tree/ExtraTreeRegressor.ts:451](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L451)

Defined in:  [generated/tree/ExtraTreeRegressor.ts:451](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L451)

### max\_features\_

The inferred value of max\_features.

#### Signature

```ts
max_features_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/tree/ExtraTreeRegressor.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L397)

Defined in:  [generated/tree/ExtraTreeRegressor.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L397)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/tree/ExtraTreeRegressor.ts:424](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L424)

Defined in:  [generated/tree/ExtraTreeRegressor.ts:424](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L424)

### n\_outputs\_

The number of outputs when `fit` is performed.

#### Signature

```ts
n_outputs_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/tree/ExtraTreeRegressor.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L478)

Defined in:  [generated/tree/ExtraTreeRegressor.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L478)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/tree/ExtraTreeRegressor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L32)

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

Defined in:  [generated/tree/ExtraTreeRegressor.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L36)

Defined in:  [generated/tree/ExtraTreeRegressor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L32) [generated/tree/ExtraTreeRegressor.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L36)

### tree\_

The underlying Tree object. Please refer to `help(sklearn.tree.\_tree.Tree)` for attributes of Tree object and [Understanding the decision tree structure](../../auto_examples/tree/plot_unveil_tree_structure.html#sphx-glr-auto-examples-tree-plot-unveil-tree-structure-py) for basic usage of these attributes.

#### Signature

```ts
tree_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/ExtraTreeRegressor.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L505)

Defined in:  [generated/tree/ExtraTreeRegressor.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L505)

## Methods

### apply()

Return the index of the leaf that each sample is predicted as.

#### Signature

```ts
apply(opts: ExtraTreeRegressorApplyOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeRegressorApplyOptions`](../interfaces/ExtraTreeRegressorApplyOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/tree/ExtraTreeRegressor.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L122)

### cost\_complexity\_pruning\_path()

Compute the pruning path during Minimal Cost-Complexity Pruning.

See [Minimal Cost-Complexity Pruning](../tree.html#minimal-cost-complexity-pruning) for details on the pruning process.

#### Signature

```ts
cost_complexity_pruning_path(opts: ExtraTreeRegressorCostComplexityPruningPathOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeRegressorCostComplexityPruningPathOptions`](../interfaces/ExtraTreeRegressorCostComplexityPruningPathOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/ExtraTreeRegressor.ts:156](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L156)

### decision\_path()

Return the decision path in the tree.

#### Signature

```ts
decision_path(opts: ExtraTreeRegressorDecisionPathOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeRegressorDecisionPathOptions`](../interfaces/ExtraTreeRegressorDecisionPathOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/tree/ExtraTreeRegressor.ts:195](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L195)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/tree/ExtraTreeRegressor.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L105)

### fit()

Build a decision tree regressor from the training set (X, y).

#### Signature

```ts
fit(opts: ExtraTreeRegressorFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeRegressorFitOptions`](../interfaces/ExtraTreeRegressorFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/ExtraTreeRegressor.ts:231](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L231)

### get\_depth()

Return the depth of the decision tree.

The depth of a tree is the maximum distance between the root and any leaf.

#### Signature

```ts
get_depth(opts: ExtraTreeRegressorGetDepthOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeRegressorGetDepthOptions`](../interfaces/ExtraTreeRegressorGetDepthOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/ExtraTreeRegressor.ts:269](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L269)

### get\_n\_leaves()

Return the number of leaves of the decision tree.

#### Signature

```ts
get_n_leaves(opts: ExtraTreeRegressorGetNLeavesOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeRegressorGetNLeavesOptions`](../interfaces/ExtraTreeRegressorGetNLeavesOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/ExtraTreeRegressor.ts:297](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L297)

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

Defined in:  [generated/tree/ExtraTreeRegressor.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L45)

### predict()

Predict class or regression value for X.

For a classification model, the predicted class for each sample in X is returned. For a regression model, the predicted value based on X is returned.

#### Signature

```ts
predict(opts: ExtraTreeRegressorPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeRegressorPredictOptions`](../interfaces/ExtraTreeRegressorPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/tree/ExtraTreeRegressor.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L329)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: ExtraTreeRegressorScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreeRegressorScoreOptions`](../interfaces/ExtraTreeRegressorScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/tree/ExtraTreeRegressor.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L363)
