# OrdinalEncoderOptions

## Properties

### categories?

> `"auto"`

Categories (unique values) per feature:

#### Default Value

`'auto'`

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L370)

### dtype?

> `any`

Desired dtype of output.

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:375](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L375)

### encoded\_missing\_value?

> `number`

Encoded value of missing categories. If set to `np.nan`, then the `dtype` parameter must be a float dtype.

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:392](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L392)

### handle\_unknown?

> `"error"` \| `"use_encoded_value"`

When set to ‘error’ an error will be raised in case an unknown categorical feature is present during transform. When set to ‘use\_encoded\_value’, the encoded value of unknown categories will be set to the value given for the parameter `unknown\_value`. In [`inverse\_transform`](#sklearn.preprocessing.OrdinalEncoder.inverse_transform "sklearn.preprocessing.OrdinalEncoder.inverse_transform"), an unknown category will be denoted as `undefined`.

#### Default Value

`'error'`

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:382](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L382)

### unknown\_value?

> `number`

When the parameter handle\_unknown is set to ‘use\_encoded\_value’, this parameter is required and will set the encoded value of unknown categories. It has to be distinct from the values used to encode any of the categories in `fit`. If set to np.nan, the `dtype` parameter must be a float dtype.

Defined in:  [generated/preprocessing/OrdinalEncoder.ts:387](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L387)
