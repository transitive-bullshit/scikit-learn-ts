# SelectorMixin

Transformer mixin that performs feature selection given a support mask

This mixin provides a feature selector implementation with `transform` and `inverse\_transform` functionality given an implementation of `\_get\_support\_mask`.

Methods

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SelectorMixin.html)

## Constructors

## constructor()

### Signature

```ts
new SelectorMixin(opts?: SelectorMixinOptions): SelectorMixin;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `SelectorMixinOptions` |

### Returns

[`SelectorMixin`](SelectorMixin.md)

Defined in:  [generated/feature\_selection/SelectorMixin.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/feature\_selection/SelectorMixin.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/feature\_selection/SelectorMixin.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/feature\_selection/SelectorMixin.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L21)

### id

> `string`

Defined in:  [generated/feature\_selection/SelectorMixin.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L18)

### opts

> `any`

Defined in:  [generated/feature\_selection/SelectorMixin.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L19)

## Accessors

### X\_new

Transformed array.

#### Signature

```ts
X_new(): Promise<any[]>;
```

#### Returns

`Promise`\<`any`[]\>

Defined in: [generated/feature\_selection/SelectorMixin.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L289)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/feature\_selection/SelectorMixin.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L30)

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

Defined in: [generated/feature\_selection/SelectorMixin.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L34)

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

Defined in:  [generated/feature\_selection/SelectorMixin.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L87)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: SelectorMixinFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SelectorMixinFitTransformOptions` |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/feature\_selection/SelectorMixin.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L106)

### get\_feature\_names\_out()

Mask feature names according to selected features.

#### Signature

```ts
get_feature_names_out(opts: SelectorMixinGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SelectorMixinGetFeatureNamesOutOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectorMixin.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L138)

### get\_support()

Get a mask, or integer index, of the features selected.

#### Signature

```ts
get_support(opts: SelectorMixinGetSupportOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SelectorMixinGetSupportOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectorMixin.ts:171](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L171)

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

Defined in:  [generated/feature\_selection/SelectorMixin.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L43)

### inverse\_transform()

Reverse the transformation operation.

#### Signature

```ts
inverse_transform(opts: SelectorMixinInverseTransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SelectorMixinInverseTransformOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectorMixin.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L199)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: SelectorMixinSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SelectorMixinSetOutputOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectorMixin.ts:233](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L233)

### transform()

Reduce X to the selected features.

#### Signature

```ts
transform(opts: SelectorMixinTransformOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SelectorMixinTransformOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/feature\_selection/SelectorMixin.ts:261](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/feature_selection/SelectorMixin.ts#L261)
