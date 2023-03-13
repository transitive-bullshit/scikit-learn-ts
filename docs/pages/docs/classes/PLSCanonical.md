# PLSCanonical

Partial Least Squares transformer and regressor.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cross_decomposition.PLSCanonical.html)

## Constructors

## constructor()

### Signature

```ts
new PLSCanonical(opts?: object): PLSCanonical;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.algorithm?` | `"nipals"` \| `"svd"` | The algorithm used to estimate the first singular vectors of the cross-covariance matrix. ‘nipals’ uses the power method while ‘svd’ will compute the whole SVD.  `Default Value`  `'nipals'` |
| `opts.copy?` | `boolean` | Whether to copy `X` and `Y` in fit before applying centering, and potentially scaling. If `false`, these operations will be done inplace, modifying both arrays.  `Default Value`  `true` |
| `opts.max_iter?` | `number` | The maximum number of iterations of the power method when `algorithm='nipals'`. Ignored otherwise.  `Default Value`  `500` |
| `opts.n_components?` | `number` | Number of components to keep. Should be in `\[1, min(n\_samples, n\_features, n\_targets)\]`.  `Default Value`  `2` |
| `opts.scale?` | `boolean` | Whether to scale `X` and `Y`.  `Default Value`  `true` |
| `opts.tol?` | `number` | The tolerance used as convergence criteria in the power method: the algorithm stops whenever the squared norm of `u\_i \- u\_{i-1}` is less than `tol`, where `u` corresponds to the left singular vector.  `Default Value`  `0.000001` |

### Returns

[`PLSCanonical`](PLSCanonical.md)

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L19)

### id

> `string`

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L16)

### opts

> `any`

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L17)

## Accessors

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cross\_decomposition/PLSCanonical.ts:702](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L702)

### intercept\_

The intercepts of the linear model such that `Y` is approximated as `Y \= X @ coef\_ + intercept\_`.

#### Signature

```ts
intercept_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cross\_decomposition/PLSCanonical.ts:629](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L629)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cross\_decomposition/PLSCanonical.ts:677](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L677)

### n\_iter\_

Number of iterations of the power method, for each component. Empty if `algorithm='svd'`.

#### Signature

```ts
n_iter_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/cross\_decomposition/PLSCanonical.ts:654](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L654)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:70](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L70)

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

Defined in: [generated/cross\_decomposition/PLSCanonical.ts:74](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L74)

### x\_loadings\_

The loadings of `X`.

#### Signature

```ts
x_loadings_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/cross\_decomposition/PLSCanonical.ts:529](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L529)

### x\_rotations\_

The projection matrix used to transform `X`.

#### Signature

```ts
x_rotations_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/cross\_decomposition/PLSCanonical.ts:579](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L579)

### x\_weights\_

The left singular vectors of the cross-covariance matrices of each iteration.

#### Signature

```ts
x_weights_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/cross\_decomposition/PLSCanonical.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L479)

### y\_loadings\_

The loadings of `Y`.

#### Signature

```ts
y_loadings_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/cross\_decomposition/PLSCanonical.ts:554](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L554)

### y\_rotations\_

The projection matrix used to transform `Y`.

#### Signature

```ts
y_rotations_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/cross\_decomposition/PLSCanonical.ts:604](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L604)

### y\_weights\_

The right singular vectors of the cross-covariance matrices of each iteration.

#### Signature

```ts
y_weights_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/cross\_decomposition/PLSCanonical.ts:504](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L504)

## Methods

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:127](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L127)

### fit()

Fit model to data.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of predictors. |
| `opts.Y?` | `ArrayLike` | Target vectors, where `n\_samples` is the number of samples and `n\_targets` is the number of response variables. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L144)

### fit\_transform()

Learn and apply the dimension reduction on the train data.

#### Signature

```ts
fit_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of predictors. |
| `opts.y?` | `ArrayLike`[] | Target vectors, where `n\_samples` is the number of samples and `n\_targets` is the number of response variables. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L184)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in [`fit`](#sklearn.cross_decomposition.PLSCanonical.fit "sklearn.cross_decomposition.PLSCanonical.fit"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:226](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L226)

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

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L83)

### inverse\_transform()

Transform data back to its original space.

#### Signature

```ts
inverse_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | New data, where `n\_samples` is the number of samples and `n\_components` is the number of pls components. |
| `opts.Y?` | `ArrayLike`[] | New target, where `n\_samples` is the number of samples and `n\_components` is the number of pls components. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L262)

### predict()

Predict targets of given samples.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Samples. |
| `opts.copy?` | `boolean` | Whether to copy `X` and `Y`, or perform in-place normalization.  `Default Value`  `true` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:304](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L304)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n\_samples, n\_samples\_fitted)`, where `n\_samples\_fitted` is the number of samples used in the fitting for the estimator. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. |
| `opts.y?` | `ArrayLike` | True values for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:348](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L348)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.transform?` | `"default"` \| `"pandas"` | Configure output of `transform` and `fit\_transform`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L397)

### transform()

Apply the dimension reduction.

#### Signature

```ts
transform(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Samples to transform. |
| `opts.Y?` | `ArrayLike`[] | Target vectors. |
| `opts.copy?` | `boolean` | Whether to copy `X` and `Y`, or perform in-place normalization.  `Default Value`  `true` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cross\_decomposition/PLSCanonical.ts:430](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cross_decomposition/PLSCanonical.ts#L430)
