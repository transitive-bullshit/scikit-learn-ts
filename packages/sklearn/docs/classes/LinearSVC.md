# LinearSVC

Linear Support Vector Classification.

Similar to SVC with parameter kernel=’linear’, but implemented in terms of liblinear rather than libsvm, so it has more flexibility in the choice of penalties and loss functions and should scale better to large numbers of samples.

This class supports both dense and sparse input and the multiclass support is handled according to a one-vs-the-rest scheme.

Read more in the [User Guide](../svm.html#svm-classification).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.svm.LinearSVC.html)

## Constructors

## constructor()

### Signature

```ts
new LinearSVC(opts?: object): LinearSVC;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.C?` | `number` | Regularization parameter. The strength of the regularization is inversely proportional to C. Must be strictly positive.  `Default Value`  `1` |
| `opts.class_weight?` | `any` | Set the parameter C of class i to `class\_weight\[i\]\*C` for SVC. If not given, all classes are supposed to have weight one. The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`. |
| `opts.dual?` | `boolean` | Select the algorithm to either solve the dual or primal optimization problem. Prefer dual=`false` when n\_samples > n\_features.  `Default Value`  `true` |
| `opts.fit_intercept?` | `boolean` | Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be already centered).  `Default Value`  `true` |
| `opts.intercept_scaling?` | `number` | When self.fit\_intercept is `true`, instance vector x becomes `\[x, self.intercept\_scaling\]`, i.e. a “synthetic” feature with constant value equals to intercept\_scaling is appended to the instance vector. The intercept becomes intercept\_scaling \* synthetic feature weight Note! the synthetic feature weight is subject to l1/l2 regularization as all other features. To lessen the effect of regularization on synthetic feature weight (and therefore on the intercept) intercept\_scaling has to be increased.  `Default Value`  `1` |
| `opts.loss?` | `"hinge"` \| `"squared_hinge"` | Specifies the loss function. ‘hinge’ is the standard SVM loss (used e.g. by the SVC class) while ‘squared\_hinge’ is the square of the hinge loss. The combination of `penalty='l1'` and `loss='hinge'` is not supported.  `Default Value`  `'squared_hinge'` |
| `opts.max_iter?` | `number` | The maximum number of iterations to be run.  `Default Value`  `1000` |
| `opts.multi_class?` | `"ovr"` \| `"crammer_singer"` | Determines the multi-class strategy if `y` contains more than two classes. `"ovr"` trains n\_classes one-vs-rest classifiers, while `"crammer\_singer"` optimizes a joint objective over all classes. While `crammer\_singer` is interesting from a theoretical perspective as it is consistent, it is seldom used in practice as it rarely leads to better accuracy and is more expensive to compute. If `"crammer\_singer"` is chosen, the options loss, penalty and dual will be ignored.  `Default Value`  `'ovr'` |
| `opts.penalty?` | `"l1"` \| `"l2"` | Specifies the norm used in the penalization. The ‘l2’ penalty is the standard used in SVC. The ‘l1’ leads to `coef\_` vectors that are sparse.  `Default Value`  `'l2'` |
| `opts.random_state?` | `number` | Controls the pseudo random number generation for shuffling the data for the dual coordinate descent (if `dual=True`). When `dual=False` the underlying implementation of [`LinearSVC`](#sklearn.svm.LinearSVC "sklearn.svm.LinearSVC") is not random and `random\_state` has no effect on the results. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |
| `opts.tol?` | `number` | Tolerance for stopping criteria.  `Default Value`  `0.0001` |
| `opts.verbose?` | `number` | Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in liblinear that, if enabled, may not work properly in a multithreaded context.  `Default Value`  `0` |

### Returns

[`LinearSVC`](LinearSVC.md)

Defined in:  [generated/svm/LinearSVC.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/svm/LinearSVC.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/svm/LinearSVC.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/svm/LinearSVC.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L23)

### id

> `string`

Defined in:  [generated/svm/LinearSVC.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L20)

### opts

> `any`

Defined in:  [generated/svm/LinearSVC.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L21)

## Accessors

### classes\_

The unique classes labels.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/svm/LinearSVC.ts:465](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L465)

Defined in:  [generated/svm/LinearSVC.ts:465](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L465)

### coef\_

Weights assigned to the features (coefficients in the primal problem).

`coef\_` is a readonly property derived from `raw\_coef\_` that follows the internal memory layout of liblinear.

#### Signature

```ts
coef_(): Promise<ArrayLike[][]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[][]\>

Defined in:  [generated/svm/LinearSVC.ts:419](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L419)

Defined in:  [generated/svm/LinearSVC.ts:419](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L419)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/svm/LinearSVC.ts:513](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L513)

Defined in:  [generated/svm/LinearSVC.ts:513](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L513)

### intercept\_

Constants in decision function.

#### Signature

```ts
intercept_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/svm/LinearSVC.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L442)

Defined in:  [generated/svm/LinearSVC.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L442)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/svm/LinearSVC.ts:488](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L488)

Defined in:  [generated/svm/LinearSVC.ts:488](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L488)

### n\_iter\_

Maximum number of iterations run across all classes.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/svm/LinearSVC.ts:538](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L538)

Defined in:  [generated/svm/LinearSVC.ts:538](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L538)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/svm/LinearSVC.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L112)

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

Defined in:  [generated/svm/LinearSVC.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L116)

Defined in:  [generated/svm/LinearSVC.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L112) [generated/svm/LinearSVC.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L116)

## Methods

### decision\_function()

Predict confidence scores for samples.

The confidence score for a sample is proportional to the signed distance of that sample to the hyperplane.

#### Signature

```ts
decision_function(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The data matrix for which we want to get the confidence scores. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/svm/LinearSVC.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L197)

### densify()

Convert coefficient matrix to dense array format.

Converts the `coef\_` member (back) to a numpy.ndarray. This is the default format of `coef\_` and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.

#### Signature

```ts
densify(opts: object): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/svm/LinearSVC.ts:232](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L232)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/svm/LinearSVC.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L178)

### fit()

Fit the model according to the given training data.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Array of weights that are assigned to individual samples. If not provided, then each sample is given unit weight. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target vector relative to X. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/svm/LinearSVC.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L258)

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

Defined in:  [generated/svm/LinearSVC.ts:125](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L125)

### predict()

Predict class labels for samples in X.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | The data matrix for which we want to get the predictions. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/svm/LinearSVC.ts:305](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L305)

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

Defined in:  [generated/svm/LinearSVC.ts:340](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L340)

### sparsify()

Convert coefficient matrix to sparse format.

Converts the `coef\_` member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

The `intercept\_` member is not converted.

#### Signature

```ts
sparsify(opts: object): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/svm/LinearSVC.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/svm/LinearSVC.ts#L391)
