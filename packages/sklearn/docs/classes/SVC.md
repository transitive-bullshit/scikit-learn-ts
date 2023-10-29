# SVC

C-Support Vector Classification.

The implementation is based on libsvm. The fit time scales at least quadratically with the number of samples and may be impractical beyond tens of thousands of samples. For large datasets consider using [`LinearSVC`](sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC "sklearn.svm.LinearSVC") or [`SGDClassifier`](sklearn.linear_model.SGDClassifier.html#sklearn.linear_model.SGDClassifier "sklearn.linear_model.SGDClassifier") instead, possibly after a [`Nystroem`](sklearn.kernel_approximation.Nystroem.html#sklearn.kernel_approximation.Nystroem "sklearn.kernel_approximation.Nystroem") transformer or other [Kernel Approximation](../kernel_approximation.html#kernel-approximation).

The multiclass support is handled according to a one-vs-one scheme.

For details on the precise mathematical formulation of the provided kernel functions and how `gamma`, `coef0` and `degree` affect each other, see the corresponding section in the narrative documentation: [Kernel functions](../svm.html#svm-kernels).

Read more in the [User Guide](../svm.html#svm-classification).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC.html)

## Constructors

## constructor()

### Signature

```ts
new SVC(opts?: object): SVC;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.C?` | `number` | Regularization parameter. The strength of the regularization is inversely proportional to C. Must be strictly positive. The penalty is a squared l2 penalty.  `Default Value`  `1` |
| `opts.break_ties?` | `boolean` | If true, `decision\_function\_shape='ovr'`, and number of classes > 2, [predict](../../glossary.html#term-predict) will break ties according to the confidence values of [decision\_function](../../glossary.html#term-decision_function); otherwise the first class among the tied classes is returned. Please note that breaking ties comes at a relatively high computational cost compared to a simple predict.  `Default Value`  `false` |
| `opts.cache_size?` | `number` | Specify the size of the kernel cache (in MB).  `Default Value`  `200` |
| `opts.class_weight?` | `any` | Set the parameter C of class i to class\_weight\[i\]\*C for SVC. If not given, all classes are supposed to have weight one. The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`. |
| `opts.coef0?` | `number` | Independent term in kernel function. It is only significant in ‘poly’ and ‘sigmoid’.  `Default Value`  `0` |
| `opts.decision_function_shape?` | `"ovr"` \| `"ovo"` | Whether to return a one-vs-rest (‘ovr’) decision function of shape (n\_samples, n\_classes) as all other classifiers, or the original one-vs-one (‘ovo’) decision function of libsvm which has shape (n\_samples, n\_classes \* (n\_classes - 1) / 2). However, note that internally, one-vs-one (‘ovo’) is always used as a multi-class strategy to train models; an ovr matrix is only constructed from the ovo matrix. The parameter is ignored for binary classification.  `Default Value`  `'ovr'` |
| `opts.degree?` | `number` | Degree of the polynomial kernel function (‘poly’). Must be non-negative. Ignored by all other kernels.  `Default Value`  `3` |
| `opts.gamma?` | `number` \| `"auto"` \| `"scale"` | Kernel coefficient for ‘rbf’, ‘poly’ and ‘sigmoid’.  `Default Value`  `'scale'` |
| `opts.kernel?` | `"sigmoid"` \| `"precomputed"` \| `"linear"` \| `"poly"` \| `"rbf"` | Specifies the kernel type to be used in the algorithm. If none is given, ‘rbf’ will be used. If a callable is given it is used to pre-compute the kernel matrix from data matrices; that matrix should be an array of shape `(n\_samples, n\_samples)`. For an intuitive visualization of different kernel types see [Plot classification boundaries with different SVM Kernels](../../auto_examples/svm/plot_svm_kernels.html#sphx-glr-auto-examples-svm-plot-svm-kernels-py).  `Default Value`  `'rbf'` |
| `opts.max_iter?` | `number` | Hard limit on iterations within solver, or -1 for no limit.  `Default Value`  `-1` |
| `opts.probability?` | `boolean` | Whether to enable probability estimates. This must be enabled prior to calling `fit`, will slow down that method as it internally uses 5-fold cross-validation, and `predict\_proba` may be inconsistent with `predict`. Read more in the [User Guide](../svm.html#scores-probabilities).  `Default Value`  `false` |
| `opts.random_state?` | `number` | Controls the pseudo random number generation for shuffling the data for probability estimates. Ignored when `probability` is `false`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |
| `opts.shrinking?` | `boolean` | Whether to use the shrinking heuristic. See the [User Guide](../svm.html#shrinking-svm).  `Default Value`  `true` |
| `opts.tol?` | `number` | Tolerance for stopping criterion.  `Default Value`  `0.001` |
| `opts.verbose?` | `boolean` | Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in libsvm that, if enabled, may not work properly in a multithreaded context.  `Default Value`  `false` |

### Returns

[`SVC`](SVC.md)

Defined in:  [generated/svm/SVC.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L29)

## Methods

### decision\_function()

Evaluate the decision function for the samples in X.

#### Signature

```ts
decision_function(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | The input samples. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/svm/SVC.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L220)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/svm/SVC.ts:203](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L203)

### fit()

Fit the SVM model according to the given training data.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. For kernel=”precomputed”, the expected shape of X is (n\_samples, n\_samples). |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Per-sample weights. Rescale C per sample. Higher weights force the classifier to put more emphasis on these points. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values (class labels in classification, real numbers in regression). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/svm/SVC.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L253)

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
| `opts.routing?` | `any` | A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/svm/SVC.ts:301](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L301)

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

Defined in:  [generated/svm/SVC.ts:148](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L148)

### predict()

Perform classification on samples in X.

For an one-class model, +1 or -1 is returned.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | For kernel=”precomputed”, the expected shape of X is (n\_samples\_test, n\_samples\_train). |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/svm/SVC.ts:336](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L336)

### predict\_log\_proba()

Compute log probabilities of possible outcomes for samples in X.

The model need to have probability information computed at training time: fit with attribute `probability` set to `true`.

#### Signature

```ts
predict_log_proba(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | For kernel=”precomputed”, the expected shape of X is (n\_samples\_test, n\_samples\_train). |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/svm/SVC.ts:371](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L371)

### predict\_proba()

Compute probabilities of possible outcomes for samples in X.

The model needs to have probability information computed at training time: fit with attribute `probability` set to `true`.

#### Signature

```ts
predict_proba(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | For kernel=”precomputed”, the expected shape of X is (n\_samples\_test, n\_samples\_train). |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/svm/SVC.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L406)

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

Defined in:  [generated/svm/SVC.ts:441](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L441)

### set\_fit\_request()

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_fit_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/svm/SVC.ts:492](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L492)

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

Defined in:  [generated/svm/SVC.ts:529](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L529)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/svm/SVC.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/svm/SVC.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/svm/SVC.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L25)

### id

> `string`

Defined in:  [generated/svm/SVC.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L22)

### opts

> `any`

Defined in:  [generated/svm/SVC.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L23)

## Accessors

### class\_weight\_

Multipliers of parameter C for each class. Computed based on the `class\_weight` parameter.

#### Signature

```ts
class_weight_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/svm/SVC.ts:562](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L562)

Defined in:  [generated/svm/SVC.ts:562](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L562)

### classes\_

The classes labels.

#### Signature

```ts
classes_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/svm/SVC.ts:585](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L585)

Defined in:  [generated/svm/SVC.ts:585](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L585)

### dual\_coef\_

Dual coefficients of the support vector in the decision function (see [Mathematical formulation](../sgd.html#sgd-mathematical-formulation)), multiplied by their targets. For multiclass, coefficient for all 1-vs-1 classifiers. The layout of the coefficients in the multiclass case is somewhat non-trivial. See the [multi-class section of the User Guide](../svm.html#svm-multi-class) for details.

#### Signature

```ts
dual_coef_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/svm/SVC.ts:607](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L607)

Defined in:  [generated/svm/SVC.ts:607](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L607)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/svm/SVC.ts:697](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L697)

Defined in:  [generated/svm/SVC.ts:697](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L697)

### fit\_status\_

0 if correctly fitted, 1 otherwise (will raise warning)

#### Signature

```ts
fit_status_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/svm/SVC.ts:629](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L629)

Defined in:  [generated/svm/SVC.ts:629](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L629)

### intercept\_

Constants in decision function.

#### Signature

```ts
intercept_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/svm/SVC.ts:652](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L652)

Defined in:  [generated/svm/SVC.ts:652](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L652)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/svm/SVC.ts:674](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L674)

Defined in:  [generated/svm/SVC.ts:674](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L674)

### n\_iter\_

Number of iterations run by the optimization routine to fit the model. The shape of this attribute depends on the number of models optimized which in turn depends on the number of classes.

#### Signature

```ts
n_iter_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/svm/SVC.ts:720](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L720)

Defined in:  [generated/svm/SVC.ts:720](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L720)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/svm/SVC.ts:135](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L135)

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

Defined in:  [generated/svm/SVC.ts:139](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L139)

Defined in:  [generated/svm/SVC.ts:135](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L135) [generated/svm/SVC.ts:139](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L139)

### shape\_fit\_

Array dimensions of training vector `X`.

#### Signature

```ts
shape_fit_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/svm/SVC.ts:787](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L787)

Defined in:  [generated/svm/SVC.ts:787](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L787)

### support\_

Indices of support vectors.

#### Signature

```ts
support_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/svm/SVC.ts:742](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L742)

Defined in:  [generated/svm/SVC.ts:742](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L742)

### support\_vectors\_

Support vectors. An empty array if kernel is precomputed.

#### Signature

```ts
support_vectors_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/svm/SVC.ts:764](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L764)

Defined in:  [generated/svm/SVC.ts:764](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/svm/SVC.ts#L764)
