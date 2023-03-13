# DecisionTreeClassifier

A decision tree classifier.

Read more in the [User Guide](../tree.html#tree).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new DecisionTreeClassifier(opts?: DecisionTreeClassifierOptions): DecisionTreeClassifier;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`DecisionTreeClassifierOptions`](../interfaces/DecisionTreeClassifierOptions.md) |

### Returns

[`DecisionTreeClassifier`](DecisionTreeClassifier.md)

Defined in:  [generated/tree/DecisionTreeClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/tree/DecisionTreeClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/tree/DecisionTreeClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/tree/DecisionTreeClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L19)

### id

> `string`

Defined in:  [generated/tree/DecisionTreeClassifier.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L16)

### opts

> `any`

Defined in:  [generated/tree/DecisionTreeClassifier.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L17)

## Accessors

### classes\_

The classes labels (single output problem), or a list of arrays of class labels (multi-output problem).

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L478)

Defined in:  [generated/tree/DecisionTreeClassifier.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L478)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:586](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L586)

Defined in:  [generated/tree/DecisionTreeClassifier.ts:586](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L586)

### max\_features\_

The inferred value of max\_features.

#### Signature

```ts
max_features_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L505)

Defined in:  [generated/tree/DecisionTreeClassifier.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L505)

### n\_classes\_

The number of classes (for single output problems), or a list containing the number of classes for each output (for multi-output problems).

#### Signature

```ts
n_classes_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:532](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L532)

Defined in:  [generated/tree/DecisionTreeClassifier.ts:532](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L532)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:559](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L559)

Defined in:  [generated/tree/DecisionTreeClassifier.ts:559](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L559)

### n\_outputs\_

The number of outputs when `fit` is performed.

#### Signature

```ts
n_outputs_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:613](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L613)

Defined in:  [generated/tree/DecisionTreeClassifier.ts:613](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L613)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/tree/DecisionTreeClassifier.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L28)

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

Defined in:  [generated/tree/DecisionTreeClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L32)

Defined in:  [generated/tree/DecisionTreeClassifier.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L28) [generated/tree/DecisionTreeClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L32)

### tree\_

The underlying Tree object. Please refer to `help(sklearn.tree.\_tree.Tree)` for attributes of Tree object and [Understanding the decision tree structure](../../auto_examples/tree/plot_unveil_tree_structure.html#sphx-glr-auto-examples-tree-plot-unveil-tree-structure-py) for basic usage of these attributes.

#### Signature

```ts
tree_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:640](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L640)

Defined in:  [generated/tree/DecisionTreeClassifier.ts:640](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L640)

## Methods

### apply()

Return the index of the leaf that each sample is predicted as.

#### Signature

```ts
apply(opts: DecisionTreeClassifierApplyOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeClassifierApplyOptions`](../interfaces/DecisionTreeClassifierApplyOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L120)

### cost\_complexity\_pruning\_path()

Compute the pruning path during Minimal Cost-Complexity Pruning.

See [Minimal Cost-Complexity Pruning](../tree.html#minimal-cost-complexity-pruning) for details on the pruning process.

#### Signature

```ts
cost_complexity_pruning_path(opts: DecisionTreeClassifierCostComplexityPruningPathOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeClassifierCostComplexityPruningPathOptions`](../interfaces/DecisionTreeClassifierCostComplexityPruningPathOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:154](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L154)

### decision\_path()

Return the decision path in the tree.

#### Signature

```ts
decision_path(opts: DecisionTreeClassifierDecisionPathOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeClassifierDecisionPathOptions`](../interfaces/DecisionTreeClassifierDecisionPathOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:193](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L193)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L103)

### fit()

Build a decision tree classifier from the training set (X, y).

#### Signature

```ts
fit(opts: DecisionTreeClassifierFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeClassifierFitOptions`](../interfaces/DecisionTreeClassifierFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:230](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L230)

### get\_depth()

Return the depth of the decision tree.

The depth of a tree is the maximum distance between the root and any leaf.

#### Signature

```ts
get_depth(opts: DecisionTreeClassifierGetDepthOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeClassifierGetDepthOptions`](../interfaces/DecisionTreeClassifierGetDepthOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:268](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L268)

### get\_n\_leaves()

Return the number of leaves of the decision tree.

#### Signature

```ts
get_n_leaves(opts: DecisionTreeClassifierGetNLeavesOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeClassifierGetNLeavesOptions`](../interfaces/DecisionTreeClassifierGetNLeavesOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L298)

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

Defined in:  [generated/tree/DecisionTreeClassifier.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L41)

### predict()

Predict class or regression value for X.

For a classification model, the predicted class for each sample in X is returned. For a regression model, the predicted value based on X is returned.

#### Signature

```ts
predict(opts: DecisionTreeClassifierPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeClassifierPredictOptions`](../interfaces/DecisionTreeClassifierPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:332](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L332)

### predict\_log\_proba()

Predict class log-probabilities of the input samples X.

#### Signature

```ts
predict_log_proba(opts: DecisionTreeClassifierPredictLogProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeClassifierPredictLogProbaOptions`](../interfaces/DecisionTreeClassifierPredictLogProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:368](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L368)

### predict\_proba()

Predict class probabilities of the input samples X.

The predicted class probability is the fraction of samples of the same class in a leaf.

#### Signature

```ts
predict_proba(opts: DecisionTreeClassifierPredictProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeClassifierPredictProbaOptions`](../interfaces/DecisionTreeClassifierPredictProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L405)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: DecisionTreeClassifierScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DecisionTreeClassifierScoreOptions`](../interfaces/DecisionTreeClassifierScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/tree/DecisionTreeClassifier.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L444)
