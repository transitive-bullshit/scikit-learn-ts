# SelectFromModel

Meta-transformer for selecting features based on importance weights.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SelectFromModel.html)

## Constructors

## constructor()

### Signature

```ts
new SelectFromModel(opts?: SelectFromModelOptions): SelectFromModel;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `SelectFromModelOptions` |

### Returns

[`SelectFromModel`](SelectFromModel.md)

Defined in:  [generated/feature\_selection/SelectFromModel.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L21)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/feature\_selection/SelectFromModel.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L19)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/feature\_selection/SelectFromModel.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L18)

### \_py

> `PythonBridge`

Defined in:  [generated/feature\_selection/SelectFromModel.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L17)

### id

> `string`

Defined in:  [generated/feature\_selection/SelectFromModel.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L14)

### opts

> `any`

Defined in:  [generated/feature\_selection/SelectFromModel.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L15)

## Accessors

### estimator\_

The base estimator from which the transformer is built. This attribute exist only when `fit` has been called.

#### Signature

```ts
estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/feature\_selection/SelectFromModel.ts:351](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L351)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/feature\_selection/SelectFromModel.ts:401](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L401)

### max\_features\_

Maximum number of features calculated during fit. Only defined if the `max\_features` is not `undefined`.

#### Signature

```ts
max_features_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/feature\_selection/SelectFromModel.ts:376](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L376)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/feature\_selection/SelectFromModel.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L26)

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

Defined in: [generated/feature\_selection/SelectFromModel.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L30)

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

Defined in:  [generated/feature\_selection/SelectFromModel.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L83)

### fit()

Fit the SelectFromModel meta-transformer.

#### Signature

```ts
fit(opts: SelectFromModelFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SelectFromModelFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectFromModel.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L100)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: SelectFromModelFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SelectFromModelFitTransformOptions` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_selection/SelectFromModel.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L134)

### get\_feature\_names\_out()

Mask feature names according to selected features.

#### Signature

```ts
get_feature_names_out(opts: SelectFromModelGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SelectFromModelGetFeatureNamesOutOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectFromModel.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L168)

### get\_support()

Get a mask, or integer index, of the features selected.

#### Signature

```ts
get_support(opts: SelectFromModelGetSupportOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SelectFromModelGetSupportOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectFromModel.ts:201](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L201)

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

Defined in:  [generated/feature\_selection/SelectFromModel.ts:39](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L39)

### inverse\_transform()

Reverse the transformation operation.

#### Signature

```ts
inverse_transform(opts: SelectFromModelInverseTransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SelectFromModelInverseTransformOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectFromModel.ts:229](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L229)

### partial\_fit()

Fit the SelectFromModel meta-transformer only once.

#### Signature

```ts
partial_fit(opts: SelectFromModelPartialFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SelectFromModelPartialFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectFromModel.ts:261](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L261)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: SelectFromModelSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SelectFromModelSetOutputOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectFromModel.ts:295](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L295)

### transform()

Reduce X to the selected features.

#### Signature

```ts
transform(opts: SelectFromModelTransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SelectFromModelTransformOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectFromModel.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/feature_selection/SelectFromModel.ts#L323)
