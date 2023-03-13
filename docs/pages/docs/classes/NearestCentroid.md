# NearestCentroid

Nearest centroid classifier.

Each class is represented by its centroid, with test samples classified to the class with the nearest centroid.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.NearestCentroid.html)

## Constructors

## constructor()

### Signature

```ts
new NearestCentroid(opts?: NearestCentroidOptions): NearestCentroid;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `NearestCentroidOptions` |

### Returns

[`NearestCentroid`](NearestCentroid.md)

Defined in:  [generated/neighbors/NearestCentroid.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/neighbors/NearestCentroid.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/neighbors/NearestCentroid.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/neighbors/NearestCentroid.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L21)

### id

> `string`

Defined in:  [generated/neighbors/NearestCentroid.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L18)

### opts

> `any`

Defined in:  [generated/neighbors/NearestCentroid.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L19)

## Accessors

### centroids\_

Centroid of each class.

#### Signature

```ts
centroids_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/neighbors/NearestCentroid.ts:194](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L194)

### classes\_

The unique classes labels.

#### Signature

```ts
classes_(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/neighbors/NearestCentroid.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L219)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/neighbors/NearestCentroid.ts:269](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L269)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/neighbors/NearestCentroid.ts:244](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L244)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/neighbors/NearestCentroid.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L30)

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

Defined in: [generated/neighbors/NearestCentroid.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L34)

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

Defined in:  [generated/neighbors/NearestCentroid.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L83)

### fit()

Fit the NearestCentroid model according to the given training data.

#### Signature

```ts
fit(opts: NearestCentroidFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `NearestCentroidFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/NearestCentroid.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L100)

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

Defined in:  [generated/neighbors/NearestCentroid.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L43)

### predict()

Perform classification on an array of test vectors `X`.

The predicted class `C` for each sample in `X` is returned.

#### Signature

```ts
predict(opts: NearestCentroidPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `NearestCentroidPredictOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/neighbors/NearestCentroid.ts:132](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L132)

### score()

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Signature

```ts
score(opts: NearestCentroidScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `NearestCentroidScoreOptions` |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neighbors/NearestCentroid.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/NearestCentroid.ts#L162)
