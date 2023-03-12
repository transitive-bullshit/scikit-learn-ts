[sklearn](../readme.md) / [Exports](../modules.md) / IncrementalPCAOptions

# Interface: IncrementalPCAOptions

## Table of contents

### Properties

- [batch\_size](IncrementalPCAOptions.md#batch_size)
- [copy](IncrementalPCAOptions.md#copy)
- [n\_components](IncrementalPCAOptions.md#n_components)
- [whiten](IncrementalPCAOptions.md#whiten)

## Properties

### batch\_size

• `Optional` **batch\_size**: `number`

The number of samples to use for each batch. Only used when calling `fit`. If `batch\_size` is `undefined`, then `batch\_size` is inferred from the data and set to `5 \* n\_features`, to provide a balance between approximation accuracy and memory consumption.

#### Defined in

[generated/decomposition/IncrementalPCA.ts:708](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L708)

___

### copy

• `Optional` **copy**: `boolean`

If `false`, X will be overwritten. `copy=False` can be used to save memory but is unsafe for general use.

**`Default Value`**

`true`

#### Defined in

[generated/decomposition/IncrementalPCA.ts:703](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L703)

___

### n\_components

• `Optional` **n\_components**: `number`

Number of components to keep. If `n\_components` is `undefined`, then `n\_components` is set to `min(n\_samples, n\_features)`.

#### Defined in

[generated/decomposition/IncrementalPCA.ts:687](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L687)

___

### whiten

• `Optional` **whiten**: `boolean`

When `true` (`false` by default) the `components\_` vectors are divided by `n\_samples` times `components\_` to ensure uncorrelated outputs with unit component-wise variances.

Whitening will remove some information from the transformed signal (the relative variance scales of the components) but can sometimes improve the predictive accuracy of the downstream estimators by making data respect some hard-wired assumptions.

**`Default Value`**

`false`

#### Defined in

[generated/decomposition/IncrementalPCA.ts:696](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/IncrementalPCA.ts#L696)
