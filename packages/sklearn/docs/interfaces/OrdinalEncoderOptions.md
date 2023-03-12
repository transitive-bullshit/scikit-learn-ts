[sklearn](../readme.md) / [Exports](../modules.md) / OrdinalEncoderOptions

# Interface: OrdinalEncoderOptions

## Table of contents

### Properties

- [categories](OrdinalEncoderOptions.md#categories)
- [dtype](OrdinalEncoderOptions.md#dtype)
- [encoded\_missing\_value](OrdinalEncoderOptions.md#encoded_missing_value)
- [handle\_unknown](OrdinalEncoderOptions.md#handle_unknown)
- [unknown\_value](OrdinalEncoderOptions.md#unknown_value)

## Properties

### categories

• `Optional` **categories**: ``"auto"``

Categories (unique values) per feature:

**`Default Value`**

`'auto'`

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L370)

___

### dtype

• `Optional` **dtype**: `any`

Desired dtype of output.

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:375](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L375)

___

### encoded\_missing\_value

• `Optional` **encoded\_missing\_value**: `number`

Encoded value of missing categories. If set to `np.nan`, then the `dtype` parameter must be a float dtype.

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:392](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L392)

___

### handle\_unknown

• `Optional` **handle\_unknown**: ``"error"`` \| ``"use_encoded_value"``

When set to ‘error’ an error will be raised in case an unknown categorical feature is present during transform. When set to ‘use\_encoded\_value’, the encoded value of unknown categories will be set to the value given for the parameter `unknown\_value`. In [`inverse\_transform`](#sklearn.preprocessing.OrdinalEncoder.inverse_transform "sklearn.preprocessing.OrdinalEncoder.inverse_transform"), an unknown category will be denoted as `undefined`.

**`Default Value`**

`'error'`

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:382](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L382)

___

### unknown\_value

• `Optional` **unknown\_value**: `number`

When the parameter handle\_unknown is set to ‘use\_encoded\_value’, this parameter is required and will set the encoded value of unknown categories. It has to be distinct from the values used to encode any of the categories in `fit`. If set to np.nan, the `dtype` parameter must be a float dtype.

#### Defined in

[generated/preprocessing/OrdinalEncoder.ts:387](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/OrdinalEncoder.ts#L387)
