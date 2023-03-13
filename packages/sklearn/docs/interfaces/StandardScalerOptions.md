# StandardScalerOptions

## Properties

### copy?

> `boolean`

If `false`, try to avoid a copy and do inplace scaling instead. This is not guaranteed to always work inplace; e.g. if the data is not a NumPy array or scipy.sparse CSR matrix, a copy may still be returned.

#### Default Value

`true`

Defined in:  [generated/preprocessing/StandardScaler.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L479)

### with\_mean?

> `boolean`

If `true`, center the data before scaling. This does not work (and will raise an exception) when attempted on sparse matrices, because centering them entails building a dense matrix which in common use cases is likely to be too large to fit in memory.

#### Default Value

`true`

Defined in:  [generated/preprocessing/StandardScaler.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L486)

### with\_std?

> `boolean`

If `true`, scale the data to unit variance (or equivalently, unit standard deviation).

#### Default Value

`true`

Defined in:  [generated/preprocessing/StandardScaler.ts:493](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/StandardScaler.ts#L493)
