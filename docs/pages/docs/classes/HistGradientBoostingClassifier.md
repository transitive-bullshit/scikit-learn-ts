# HistGradientBoostingClassifier

Histogram-based Gradient Boosting Classification Tree.

This estimator is much faster than [`GradientBoostingClassifier`](sklearn.ensemble.GradientBoostingClassifier.html#sklearn.ensemble.GradientBoostingClassifier "sklearn.ensemble.GradientBoostingClassifier") for big datasets (n\_samples >= 10 000).

This estimator has native support for missing values (NaNs). During training, the tree grower learns at each split point whether samples with missing values should go to the left or right child, based on the potential gain. When predicting, samples with missing values are assigned to the left or right child consequently. If no missing values were encountered for a given feature during training, then samples with missing values are mapped to whichever child has the most samples.

This implementation is inspired by [LightGBM](https://github.com/Microsoft/LightGBM).

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.HistGradientBoostingClassifier.html)

## Constructors

## constructor()

### Signature

```ts
new HistGradientBoostingClassifier(opts?: object): HistGradientBoostingClassifier;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.categorical_features?` | `number` | Indicates the categorical features. |
| `opts.class_weight?` | `any` | Weights associated with classes in the form `{class\_label: weight}`. If not given, all classes are supposed to have weight one. The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`. Note that these weights will be multiplied with sample\_weight (passed through the fit method) if `sample\_weight` is specified. |
| `opts.early_stopping?` | `boolean` \| `"auto"` | If ‘auto’, early stopping is enabled if the sample size is larger than 10000. If `true`, early stopping is enabled, otherwise early stopping is disabled.  `Default Value`  `'auto'` |
| `opts.interaction_cst?` | `"pairwise"` \| `"no_interaction"` | Specify interaction constraints, the sets of features which can interact with each other in child node splits.  Each item specifies the set of feature indices that are allowed to interact with each other. If there are more features than specified in these constraints, they are treated as if they were specified as an additional set.  The strings “pairwise” and “no\_interactions” are shorthands for allowing only pairwise or no interactions, respectively.  For instance, with 5 features in total, `interaction\_cst=\[{0, 1}\]` is equivalent to `interaction\_cst=\[{0, 1}, {2, 3, 4}\]`, and specifies that each branch of a tree will either only split on features 0 and 1 or only split on features 2, 3 and 4. |
| `opts.l2_regularization?` | `number` | The L2 regularization parameter. Use 0 for no regularization.  `Default Value`  `0` |
| `opts.learning_rate?` | `number` | The learning rate, also known as *shrinkage*. This is used as a multiplicative factor for the leaves values. Use `1` for no shrinkage.  `Default Value`  `0.1` |
| `opts.loss?` | `"auto"` \| `"log_loss"` \| `"binary_crossentropy"` \| `"categorical_crossentropy"` | The loss function to use in the boosting process.  For binary classification problems, ‘log\_loss’ is also known as logistic loss, binomial deviance or binary crossentropy. Internally, the model fits one tree per boosting iteration and uses the logistic sigmoid function (expit) as inverse link function to compute the predicted positive class probability.  For multiclass classification problems, ‘log\_loss’ is also known as multinomial deviance or categorical crossentropy. Internally, the model fits one tree per boosting iteration and per class and uses the softmax function as inverse link function to compute the predicted probabilities of the classes.  `Default Value`  `'log_loss'` |
| `opts.max_bins?` | `number` | The maximum number of bins to use for non-missing values. Before training, each feature of the input array `X` is binned into integer-valued bins, which allows for a much faster training stage. Features with a small number of unique values may use less than `max\_bins` bins. In addition to the `max\_bins` bins, one more bin is always reserved for missing values. Must be no larger than 255.  `Default Value`  `255` |
| `opts.max_depth?` | `number` | The maximum depth of each tree. The depth of a tree is the number of edges to go from the root to the deepest leaf. Depth isn’t constrained by default. |
| `opts.max_iter?` | `number` | The maximum number of iterations of the boosting process, i.e. the maximum number of trees for binary classification. For multiclass classification, `n\_classes` trees per iteration are built.  `Default Value`  `100` |
| `opts.max_leaf_nodes?` | `number` | The maximum number of leaves for each tree. Must be strictly greater than 1. If `undefined`, there is no maximum limit.  `Default Value`  `31` |
| `opts.min_samples_leaf?` | `number` | The minimum number of samples per leaf. For small datasets with less than a few hundred samples, it is recommended to lower this value since only very shallow trees would be built.  `Default Value`  `20` |
| `opts.monotonic_cst?` | `any` | Monotonic constraint to enforce on each feature are specified using the following integer values: |
| `opts.n_iter_no_change?` | `number` | Used to determine when to “early stop”. The fitting process is stopped when none of the last `n\_iter\_no\_change` scores are better than the `n\_iter\_no\_change \- 1` -th-to-last one, up to some tolerance. Only used if early stopping is performed.  `Default Value`  `10` |
| `opts.random_state?` | `number` | Pseudo-random number generator to control the subsampling in the binning process, and the train/validation data split if early stopping is enabled. Pass an int for reproducible output across multiple function calls. See Glossary. |
| `opts.scoring?` | `string` | Scoring parameter to use for early stopping. It can be a single string (see The scoring parameter: defining model evaluation rules) or a callable (see Defining your scoring strategy from metric functions). If `undefined`, the estimator’s default scorer is used. If `scoring='loss'`, early stopping is checked w.r.t the loss value. Only used if early stopping is performed.  `Default Value`  `'loss'` |
| `opts.tol?` | `number` | The absolute tolerance to use when comparing scores. The higher the tolerance, the more likely we are to early stop: higher tolerance means that it will be harder for subsequent iterations to be considered an improvement upon the reference score.  `Default Value`  `1e-7` |
| `opts.validation_fraction?` | `number` | Proportion (or absolute size) of training data to set aside as validation data for early stopping. If `undefined`, early stopping is done on the training data. Only used if early stopping is performed.  `Default Value`  `0.1` |
| `opts.verbose?` | `number` | The verbosity level. If not zero, print some information about the fitting process.  `Default Value`  `0` |
| `opts.warm_start?` | `boolean` | When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble. For results to be valid, the estimator should be re-trained on the same data only. See the Glossary.  `Default Value`  `false` |

### Returns

[`HistGradientBoostingClassifier`](HistGradientBoostingClassifier.md)

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L29)

## Methods

### decision\_function()

Compute the decision function of `X`.

#### Signature

```ts
decision_function(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input samples. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:288](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L288)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:271](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L271)

### fit()

Fit the gradient boosting model.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The input samples. |
| `opts.sample_weight?` | `any` | Weights of training data. |
| `opts.y?` | `ArrayLike` | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:326](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L326)

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

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:191](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L191)

### predict()

Predict classes for X.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input samples. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L377)

### predict\_proba()

Predict class probabilities for X.

#### Signature

```ts
predict_proba(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | The input samples. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:414](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L414)

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
| `opts.X?` | `ArrayLike`[] | Test samples. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. |
| `opts.y?` | `ArrayLike` | True labels for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L454)

### staged\_decision\_function()

Compute decision function of `X` for each iteration.

This method allows monitoring (i.e. determine error on testing set) after each stage.

#### Signature

```ts
staged_decision_function(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The input samples. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:508](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L508)

### staged\_predict()

Predict classes at each iteration.

This method allows monitoring (i.e. determine error on testing set) after each stage.

#### Signature

```ts
staged_predict(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The input samples. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:548](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L548)

### staged\_predict\_proba()

Predict class probabilities at each iteration.

This method allows monitoring (i.e. determine error on testing set) after each stage.

#### Signature

```ts
staged_predict_proba(opts: object): Promise<any[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | The input samples. |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:588](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L588)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L25)

### id

> `string`

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L22)

### opts

> `any`

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L23)

## Accessors

### classes\_

Class labels.

#### Signature

```ts
classes_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/ensemble/HistGradientBoostingClassifier.ts:626](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L626)

### do\_early\_stopping\_

Indicates whether early stopping is used during training.

#### Signature

```ts
do_early_stopping_(): Promise<boolean>;
```

#### Returns

`Promise`\<`boolean`\>

Defined in: [generated/ensemble/HistGradientBoostingClassifier.ts:653](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L653)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/ensemble/HistGradientBoostingClassifier.ts:815](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L815)

### is\_categorical\_

Boolean mask for the categorical features. `undefined` if there are no categorical features.

#### Signature

```ts
is_categorical_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/ensemble/HistGradientBoostingClassifier.ts:761](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L761)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/ensemble/HistGradientBoostingClassifier.ts:788](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L788)

### n\_trees\_per\_iteration\_

The number of tree that are built at each iteration. This is equal to 1 for binary classification, and to `n\_classes` for multiclass classification.

#### Signature

```ts
n_trees_per_iteration_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/ensemble/HistGradientBoostingClassifier.ts:680](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L680)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/ensemble/HistGradientBoostingClassifier.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L178)

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

Defined in: [generated/ensemble/HistGradientBoostingClassifier.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L182)

### train\_score\_

The scores at each iteration on the training data. The first entry is the score of the ensemble before the first iteration. Scores are computed according to the `scoring` parameter. If `scoring` is not ‘loss’, scores are computed on a subset of at most 10 000 samples. Empty if no early stopping.

#### Signature

```ts
train_score_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/ensemble/HistGradientBoostingClassifier.ts:707](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L707)

### validation\_score\_

The scores at each iteration on the held-out validation data. The first entry is the score of the ensemble before the first iteration. Scores are computed according to the `scoring` parameter. Empty if no early stopping or if `validation\_fraction` is `undefined`.

#### Signature

```ts
validation_score_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/ensemble/HistGradientBoostingClassifier.ts:734](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L734)
