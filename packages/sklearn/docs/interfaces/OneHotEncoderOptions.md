# OneHotEncoderOptions

## Properties

### categories?

> `"auto"`

Categories (unique values) per feature:

#### Default Value

`'auto'`

Defined in:  [generated/preprocessing/OneHotEncoder.ts:413](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L413)

### drop?

> `any`[] \| `"first"` \| `"if_binary"`

Specifies a methodology to use to drop one of the categories per feature. This is useful in situations where perfectly collinear features cause problems, such as when feeding the resulting data into an unregularized linear regression model.

However, dropping one category breaks the symmetry of the original representation and can therefore induce a bias in downstream models, for instance for penalized linear classification or regression models.

Defined in:  [generated/preprocessing/OneHotEncoder.ts:420](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L420)

### dtype?

> `any`

Desired dtype of output.

Defined in:  [generated/preprocessing/OneHotEncoder.ts:439](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L439)

### handle\_unknown?

> `"ignore"` \| `"error"` \| `"infrequent_if_exist"`

Specifies the way unknown categories are handled during [`transform`](#sklearn.preprocessing.OneHotEncoder.transform "sklearn.preprocessing.OneHotEncoder.transform").

#### Default Value

`'error'`

Defined in:  [generated/preprocessing/OneHotEncoder.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L446)

### max\_categories?

> `number`

Specifies an upper limit to the number of output features for each input feature when considering infrequent categories. If there are infrequent categories, `max\_categories` includes the category representing the infrequent categories along with the frequent categories. If `undefined`, there is no limit to the number of output features.

Defined in:  [generated/preprocessing/OneHotEncoder.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L456)

### min\_frequency?

> `number`

Specifies the minimum frequency below which a category will be considered infrequent.

Defined in:  [generated/preprocessing/OneHotEncoder.ts:451](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L451)

### sparse?

> `boolean`

Will return sparse matrix if set `true` else will return an array.

#### Default Value

`true`

Defined in:  [generated/preprocessing/OneHotEncoder.ts:427](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L427)

### sparse\_output?

> `boolean`

Will return sparse matrix if set `true` else will return an array.

#### Default Value

`true`

Defined in:  [generated/preprocessing/OneHotEncoder.ts:434](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/preprocessing/OneHotEncoder.ts#L434)
