# ClassifierChain

A multi-label model that arranges binary classifiers into a chain.

Each model makes a prediction in the order specified by the chain using all of the available features provided to the model plus the predictions of models that are earlier in the chain.

For an example of how to use `ClassifierChain` and benefit from its ensemble, see [ClassifierChain on a yeast dataset](../../auto_examples/multioutput/plot_classifier_chain_yeast.html#sphx-glr-auto-examples-multioutput-plot-classifier-chain-yeast-py) example.

Read more in the [User Guide](../multiclass.html#classifierchain).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multioutput.ClassifierChain.html)

## Constructors

## constructor()

### Signature

```ts
new ClassifierChain(opts?: object): ClassifierChain;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.base_estimator?` | `any` | The base estimator from which the classifier chain is built. |
| `opts.cv?` | `number` | Determines whether to use cross validated predictions or true labels for the results of previous estimators in the chain. Possible inputs for cv are: |
| `opts.order?` | [`ArrayLike`](../types/ArrayLike.md) \| `"random"` | If `undefined`, the order will be determined by the order of columns in the label matrix Y.: |
| `opts.random_state?` | `number` | If `order='random'`, determines random number generation for the chain order. In addition, it controls the random seed given at each `base\_estimator` at each chaining iteration. Thus, it is only used when `base\_estimator` exposes a `random\_state`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |
| `opts.verbose?` | `boolean` | If `true`, chain progress is output as each model is completed.  `Default Value`  `false` |

### Returns

[`ClassifierChain`](ClassifierChain.md)

Defined in:  [generated/multioutput/ClassifierChain.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L27)

## Methods

### decision\_function()

Evaluate the decision\_function of the models in the chain.

#### Signature

```ts
decision_function(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | The input data. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/multioutput/ClassifierChain.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L133)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/multioutput/ClassifierChain.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L116)

### fit()

Fit the model to data matrix X and targets Y.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The input data. |
| `opts.Y?` | [`ArrayLike`](../types/ArrayLike.md)[] | The target values. |
| `opts.fit_params?` | `any` | Parameters passed to the `fit` method of each step.  Only available if `enable\_metadata\_routing=True`. See the [User Guide](../../metadata_routing.html#metadata-routing). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multioutput/ClassifierChain.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L168)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Signature

```ts
get_metadata_routing(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.routing?` | `any` | A [`MetadataRouter`](sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multioutput/ClassifierChain.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L219)

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

Defined in:  [generated/multioutput/ClassifierChain.ts:72](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L72)

### predict()

Predict on the data matrix X using the ClassifierChain model.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The input data. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/multioutput/ClassifierChain.ts:254](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L254)

### predict\_proba()

Predict probability estimates.

#### Signature

```ts
predict_proba(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The input data. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/multioutput/ClassifierChain.ts:287](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L287)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Test samples. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | True labels for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/multioutput/ClassifierChain.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L322)

### set\_score\_request()

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_score_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `score`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/multioutput/ClassifierChain.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L373)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/multioutput/ClassifierChain.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/multioutput/ClassifierChain.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/multioutput/ClassifierChain.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L23)

### id

> `string`

Defined in:  [generated/multioutput/ClassifierChain.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L20)

### opts

> `any`

Defined in:  [generated/multioutput/ClassifierChain.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L21)

## Accessors

### classes\_

A list of arrays of length `len(estimators\_)` containing the class labels for each estimator in the chain.

#### Signature

```ts
classes_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/multioutput/ClassifierChain.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L409)

Defined in:  [generated/multioutput/ClassifierChain.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L409)

### estimators\_

A list of clones of base\_estimator.

#### Signature

```ts
estimators_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/multioutput/ClassifierChain.ts:434](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L434)

Defined in:  [generated/multioutput/ClassifierChain.ts:434](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L434)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/multioutput/ClassifierChain.ts:509](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L509)

Defined in:  [generated/multioutput/ClassifierChain.ts:509](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L509)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying `base\_estimator` exposes such an attribute when fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/multioutput/ClassifierChain.ts:484](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L484)

Defined in:  [generated/multioutput/ClassifierChain.ts:484](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L484)

### order\_

The order of labels in the classifier chain.

#### Signature

```ts
order_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/multioutput/ClassifierChain.ts:459](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L459)

Defined in:  [generated/multioutput/ClassifierChain.ts:459](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L459)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/multioutput/ClassifierChain.ts:59](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L59)

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

Defined in:  [generated/multioutput/ClassifierChain.ts:63](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L63)

Defined in:  [generated/multioutput/ClassifierChain.ts:59](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L59) [generated/multioutput/ClassifierChain.ts:63](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L63)
