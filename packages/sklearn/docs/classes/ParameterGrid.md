# ParameterGrid

Grid of parameters with a discrete number of values for each.

Can be used to iterate over parameter value combinations with the Python built-in function iter. The order of the generated parameter combinations is deterministic.

Read more in the [User Guide](../grid_search.html#grid-search).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.ParameterGrid.html)

## Constructors

## constructor()

### Signature

```ts
new ParameterGrid(opts?: object): ParameterGrid;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.param_grid?` | `any` | The parameter grid to explore, as a dictionary mapping estimator parameters to sequences of allowed values.  An empty dict signifies default parameters.  A sequence of dicts signifies a sequence of grids to search, and is useful to avoid exploring parameter combinations that make no sense or have no effect. See the examples below. |

### Returns

[`ParameterGrid`](ParameterGrid.md)

Defined in:  [generated/model\_selection/ParameterGrid.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/ParameterGrid.ts#L25)

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

Defined in:  [generated/model\_selection/ParameterGrid.ts:92](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/ParameterGrid.ts#L92)

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

Defined in:  [generated/model\_selection/ParameterGrid.ts:52](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/ParameterGrid.ts#L52)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/model\_selection/ParameterGrid.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/ParameterGrid.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/model\_selection/ParameterGrid.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/ParameterGrid.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/model\_selection/ParameterGrid.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/ParameterGrid.ts#L21)

### id

> `string`

Defined in:  [generated/model\_selection/ParameterGrid.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/ParameterGrid.ts#L18)

### opts

> `any`

Defined in:  [generated/model\_selection/ParameterGrid.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/ParameterGrid.ts#L19)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/model\_selection/ParameterGrid.ts:39](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/ParameterGrid.ts#L39)

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

Defined in:  [generated/model\_selection/ParameterGrid.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/ParameterGrid.ts#L43)

Defined in:  [generated/model\_selection/ParameterGrid.ts:39](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/ParameterGrid.ts#L39) [generated/model\_selection/ParameterGrid.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/ParameterGrid.ts#L43)
