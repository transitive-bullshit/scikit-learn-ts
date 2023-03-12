# LogisticRegressionCV

Logistic Regression CV (aka logit, MaxEnt) classifier.

See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

This class implements logistic regression using liblinear, newton-cg, sag of lbfgs optimizer. The newton-cg, sag and lbfgs solvers support only L2 regularization with primal formulation. The liblinear solver supports both L1 and L2 regularization, with a dual formulation only for the L2 penalty. Elastic-Net penalty is only supported by the saga solver.

For the grid of `Cs` values and `l1\_ratios` values, the best hyperparameter is selected by the cross-validator [`StratifiedKFold`](sklearn.model_selection.StratifiedKFold.html#sklearn.model_selection.StratifiedKFold "sklearn.model_selection.StratifiedKFold"), but it can be changed using the [cv](../../glossary.html#term-cv) parameter. The ‘newton-cg’, ‘sag’, ‘saga’ and ‘lbfgs’ solvers can warm-start the coefficients (see [Glossary](../../glossary.html#term-warm_start)).

Read more in the [User Guide](../linear_model.html#logistic-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegressionCV.html)

## Constructors

## constructor()

### Signature

```ts
new LogisticRegressionCV(opts?: LogisticRegressionCVOptions): LogisticRegressionCV;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LogisticRegressionCVOptions`](../interfaces/LogisticRegressionCVOptions.md) |

### Returns

[`LogisticRegressionCV`](LogisticRegressionCV.md)

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L29)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L25)

### id

> `string`

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L22)

### opts

> `any`

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L23)

## Accessors

### C\_

Array of C that maps to the best scores across every class. If refit is set to `false`, then for each class, the best C is the average of the C’s that correspond to the best scores for each fold. `C\_` is of shape(n\_classes,) when the problem is binary.

#### Signature

```ts
C_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/linear\_model/LogisticRegressionCV.ts:591](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L591)

### Cs\_

Array of C i.e. inverse of regularization parameter values used for cross-validation.

#### Signature

```ts
Cs_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/linear\_model/LogisticRegressionCV.ts:483](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L483)

### classes\_

A list of class labels known to the classifier.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/linear\_model/LogisticRegressionCV.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L398)

### coef\_

Coefficient of the features in the decision function.

`coef\_` is of shape (1, n\_features) when the given problem is binary.

#### Signature

```ts
coef_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/linear\_model/LogisticRegressionCV.ts:427](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L427)

### coefs\_paths\_

dict with classes as the keys, and the path of coefficients obtained during cross-validating across each fold and then across each Cs after doing an OvR for the corresponding class as values. If the ‘multi\_class’ option is set to ‘multinomial’, then the coefs\_paths are the coefficients corresponding to each class. Each dict value has shape `(n\_folds, n\_cs, n\_features)` or `(n\_folds, n\_cs, n\_features + 1)` depending on whether the intercept is fit or not. If `penalty='elasticnet'`, the shape is `(n\_folds, n\_cs, n\_l1\_ratios\_, n\_features)` or `(n\_folds, n\_cs, n\_l1\_ratios\_, n\_features + 1)`.

#### Signature

```ts
coefs_paths_(): Promise<ArrayLike[][]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[][]\>

Defined in: [generated/linear\_model/LogisticRegressionCV.ts:537](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L537)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/linear\_model/LogisticRegressionCV.ts:699](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L699)

### intercept\_

Intercept (a.k.a. bias) added to the decision function.

If `fit\_intercept` is set to `false`, the intercept is set to zero. `intercept\_` is of shape(1,) when the problem is binary.

#### Signature

```ts
intercept_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/linear\_model/LogisticRegressionCV.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L456)

### l1\_ratio\_

Array of l1\_ratio that maps to the best scores across every class. If refit is set to `false`, then for each class, the best l1\_ratio is the average of the l1\_ratio’s that correspond to the best scores for each fold. `l1\_ratio\_` is of shape(n\_classes,) when the problem is binary.

#### Signature

```ts
l1_ratio_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/linear\_model/LogisticRegressionCV.ts:618](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L618)

### l1\_ratios\_

Array of l1\_ratios used for cross-validation. If no l1\_ratio is used (i.e. penalty is not ‘elasticnet’), this is set to `\[`undefined`\]`

#### Signature

```ts
l1_ratios_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/linear\_model/LogisticRegressionCV.ts:510](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L510)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/linear\_model/LogisticRegressionCV.ts:672](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L672)

### n\_iter\_

Actual number of iterations for all classes, folds and Cs. In the binary or multinomial cases, the first dimension is equal to 1. If `penalty='elasticnet'`, the shape is `(n\_classes, n\_folds, n\_cs, n\_l1\_ratios)` or `(1, n\_folds, n\_cs, n\_l1\_ratios)`.

#### Signature

```ts
n_iter_(): Promise<ArrayLike[][]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[][]\>

Defined in: [generated/linear\_model/LogisticRegressionCV.ts:645](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L645)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L34)

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

Defined in: [generated/linear\_model/LogisticRegressionCV.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L38)

### scores\_

dict with classes as the keys, and the values as the grid of scores obtained during cross-validating each fold, after doing an OvR for the corresponding class. If the ‘multi\_class’ option given is ‘multinomial’ then the same scores are repeated across all classes, since this is the multinomial class. Each dict value has shape `(n\_folds, n\_cs)` or `(n\_folds, n\_cs, n\_l1\_ratios)` if `penalty='elasticnet'`.

#### Signature

```ts
scores_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/linear\_model/LogisticRegressionCV.ts:564](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L564)

## Methods

### decision\_function()

Predict confidence scores for samples.

The confidence score for a sample is proportional to the signed distance of that sample to the hyperplane.

#### Signature

```ts
decision_function(opts: LogisticRegressionCVDecisionFunctionOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LogisticRegressionCVDecisionFunctionOptions`](../interfaces/LogisticRegressionCVDecisionFunctionOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:128](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L128)

### densify()

Convert coefficient matrix to dense array format.

Converts the `coef\_` member (back) to a numpy.ndarray. This is the default format of `coef\_` and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.

#### Signature

```ts
densify(opts: LogisticRegressionCVDensifyOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LogisticRegressionCVDensifyOptions`](../interfaces/LogisticRegressionCVDensifyOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:165](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L165)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:109](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L109)

### fit()

Fit the model according to the given training data.

#### Signature

```ts
fit(opts: LogisticRegressionCVFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LogisticRegressionCVFitOptions`](../interfaces/LogisticRegressionCVFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:193](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L193)

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

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L47)

### predict()

Predict class labels for samples in X.

#### Signature

```ts
predict(opts: LogisticRegressionCVPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LogisticRegressionCVPredictOptions`](../interfaces/LogisticRegressionCVPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:227](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L227)

### predict\_log\_proba()

Predict logarithm of probability estimates.

The returned estimates for all classes are ordered by the label of classes.

#### Signature

```ts
predict_log_proba(opts: LogisticRegressionCVPredictLogProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LogisticRegressionCVPredictLogProbaOptions`](../interfaces/LogisticRegressionCVPredictLogProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L259)

### predict\_proba()

Probability estimates.

The returned estimates for all classes are ordered by the label of classes.

For a multi\_class problem, if multi\_class is set to be “multinomial” the softmax function is used to find the predicted probability of each class. Else use a one-vs-rest approach, i.e calculate the probability of each class assuming it to be positive using the logistic function. and normalize these values across all the classes.

#### Signature

```ts
predict_proba(opts: LogisticRegressionCVPredictProbaOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LogisticRegressionCVPredictProbaOptions`](../interfaces/LogisticRegressionCVPredictProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L298)

### score()

Score using the `scoring` option on the given test data and labels.

#### Signature

```ts
score(opts: LogisticRegressionCVScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LogisticRegressionCVScoreOptions`](../interfaces/LogisticRegressionCVScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:332](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L332)

### sparsify()

Convert coefficient matrix to sparse format.

Converts the `coef\_` member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

The `intercept\_` member is not converted.

#### Signature

```ts
sparsify(opts: LogisticRegressionCVSparsifyOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LogisticRegressionCVSparsifyOptions`](../interfaces/LogisticRegressionCVSparsifyOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/linear\_model/LogisticRegressionCV.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/linear_model/LogisticRegressionCV.ts#L370)
