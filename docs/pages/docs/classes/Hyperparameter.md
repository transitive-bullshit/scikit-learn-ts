# Hyperparameter

A kernel hyperparameter’s specification in form of a namedtuple.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.Hyperparameter.html)

## Constructors

## constructor()

### Signature

```ts
new Hyperparameter(opts?: object): Hyperparameter;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.bounds?` | `"fixed"` | The lower and upper bound on the parameter. If n\_elements>1, a pair of 1d array with n\_elements each may be given alternatively. If the string “fixed” is passed as bounds, the hyperparameter’s value cannot be changed. |
| `opts.fixed?` | `boolean` | Whether the value of this hyperparameter is fixed, i.e., cannot be changed during hyperparameter tuning. If `undefined` is passed, the “fixed” is derived based on the given bounds. |
| `opts.n_elements?` | `number` | The number of elements of the hyperparameter value. Defaults to 1, which corresponds to a scalar hyperparameter. n\_elements > 1 corresponds to a hyperparameter which is vector-valued, such as, e.g., anisotropic length-scales.  `Default Value`  `1` |
| `opts.name?` | `string` | The name of the hyperparameter. Note that a kernel using a hyperparameter with name “x” must have the attributes self.x and self.x\_bounds |
| `opts.value_type?` | `string` | The type of the hyperparameter. Currently, only “numeric” hyperparameters are supported. |

### Returns

[`Hyperparameter`](Hyperparameter.md)

Defined in:  [generated/gaussian\_process/kernels/Hyperparameter.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L21)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/Hyperparameter.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L19)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/Hyperparameter.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L18)

### \_py

> `PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/Hyperparameter.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L17)

### id

> `string`

Defined in:  [generated/gaussian\_process/kernels/Hyperparameter.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L14)

### opts

> `any`

Defined in:  [generated/gaussian\_process/kernels/Hyperparameter.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L15)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/Hyperparameter.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L53)

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

Defined in: [generated/gaussian\_process/kernels/Hyperparameter.ts:57](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L57)

## Methods

### \_\_call\_\_()

Call self as a function.

#### Signature

```ts
__call__(opts: object): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/kernels/Hyperparameter.ts:127](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L127)

### count()

Return number of occurrences of value.

#### Signature

```ts
count(opts: object): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/kernels/Hyperparameter.ts:153](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L153)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/gaussian\_process/kernels/Hyperparameter.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L110)

### index()

Return first index of value.

Raises ValueError if the value is not present.

#### Signature

```ts
index(opts: object): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/kernels/Hyperparameter.ts:181](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L181)

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

Defined in:  [generated/gaussian\_process/kernels/Hyperparameter.ts:66](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L66)
