# Class: TargetEncoder

Target Encoder for regression and classification targets.

Each category is encoded based on a shrunk estimate of the average target values for observations belonging to the category. The encoding scheme mixes the global target mean with the target mean conditioned on the value of the category (see [\[MIC\]](https://scikit-learn.org/stable/modules/generated/#rf862141e5a0c-mic)).

When the target type is “multiclass”, encodings are based on the conditional probability estimate for each class. The target is first binarized using the “one-vs-all” scheme via [`LabelBinarizer`](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.LabelBinarizer.html#sklearn.preprocessing.LabelBinarizer "sklearn.preprocessing.LabelBinarizer"), then the average target value for each class and each category is used for encoding, resulting in `n_features` \* `n_classes` encoded output features.

[`TargetEncoder`](https://scikit-learn.org/stable/modules/generated/#sklearn.preprocessing.TargetEncoder "sklearn.preprocessing.TargetEncoder") considers missing values, such as `np.nan` or `undefined`, as another category and encodes them like any other category. Categories that are not seen during [`fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.preprocessing.TargetEncoder.fit "sklearn.preprocessing.TargetEncoder.fit") are encoded with the target mean, i.e. `target_mean_`.

For a demo on the importance of the `TargetEncoder` internal cross-fitting, see [Target Encoder’s Internal Cross fitting](https://scikit-learn.org/stable/modules/generated/../../auto_examples/preprocessing/plot_target_encoder_cross_val.html#sphx-glr-auto-examples-preprocessing-plot-target-encoder-cross-val-py). For a comparison of different encoders, refer to [Comparing Target Encoder with Other Encoders](https://scikit-learn.org/stable/modules/generated/../../auto_examples/preprocessing/plot_target_encoder.html#sphx-glr-auto-examples-preprocessing-plot-target-encoder-py). Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../preprocessing.html#target-encoder).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.TargetEncoder.html)

## Constructors

### new TargetEncoder()

> **new TargetEncoder**(`opts`?): [`TargetEncoder`](TargetEncoder.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.categories`? | `"auto"` | Categories (unique values) per feature: |
| `opts.cv`? | `number` | Determines the number of folds in the [cross fitting](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-0) strategy used in [`fit_transform`](https://scikit-learn.org/stable/modules/generated/#sklearn.preprocessing.TargetEncoder.fit_transform "sklearn.preprocessing.TargetEncoder.fit_transform"). For classification targets, `StratifiedKFold` is used and for continuous targets, `KFold` is used. |
| `opts.random_state`? | `number` | When `shuffle` is `true`, `random_state` affects the ordering of the indices, which controls the randomness of each fold. Otherwise, this parameter has no effect. Pass an int for reproducible output across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state). |
| `opts.shuffle`? | `boolean` | Whether to shuffle the data in [`fit_transform`](https://scikit-learn.org/stable/modules/generated/#sklearn.preprocessing.TargetEncoder.fit_transform "sklearn.preprocessing.TargetEncoder.fit_transform") before splitting into folds. Note that the samples within each split will not be shuffled. |
| `opts.smooth`? | `number` \| `"auto"` | The amount of mixing of the target mean conditioned on the value of the category with the global target mean. A larger `smooth` value will put more weight on the global target mean. If `"auto"`, then `smooth` is set to an empirical Bayes estimate. |
| `opts.target_type`? | `"auto"` \| `"binary"` \| `"continuous"` \| `"multiclass"` | Type of target. |

**Returns** [`TargetEncoder`](TargetEncoder.md)

**Defined in** [generated/preprocessing/TargetEncoder.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L29)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/preprocessing/TargetEncoder.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L27) |
| `_isInitialized` | `boolean` | `false` | [generated/preprocessing/TargetEncoder.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L26) |
| `_py` | `PythonBridge` | `undefined` | [generated/preprocessing/TargetEncoder.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L25) |
| `id` | `string` | `undefined` | [generated/preprocessing/TargetEncoder.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L22) |
| `opts` | `any` | `undefined` | [generated/preprocessing/TargetEncoder.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L23) |

## Accessors

### categories\_

**Get Signature**

> **get** **categories\_**(): `Promise`\<`any`\>

The categories of each input feature determined during fitting or specified in `categories` (in order of the features in `X` and corresponding with the output of [`transform`](https://scikit-learn.org/stable/modules/generated/#sklearn.preprocessing.TargetEncoder.transform "sklearn.preprocessing.TargetEncoder.transform")).

**Returns** `Promise`\<`any`\>

**Defined in** [generated/preprocessing/TargetEncoder.ts:378](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L378)

***

### classes\_

**Get Signature**

> **get** **classes\_**(): `Promise`\<`ArrayLike`\>

If `target_type_` is ‘binary’ or ‘multiclass’, holds the label for each class, otherwise `undefined`.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/preprocessing/TargetEncoder.ts:503](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L503)

***

### encodings\_

**Get Signature**

> **get** **encodings\_**(): `Promise`\<`any`[]\>

Encodings learnt on all of `X`. For feature `i`, `encodings_\[i\]` are the encodings matching the categories listed in `categories_\[i\]`. When `target_type_` is “multiclass”, the encoding for feature `i` and class `j` is stored in `encodings_\[j + (i \* len(classes_))\]`. E.g., for 2 features (f) and 3 classes (c), encodings are ordered: f0_c0, f0_c1, f0_c2, f1_c0, f1_c1, f1_c2,

**Returns** `Promise`\<`any`[]\>

**Defined in** [generated/preprocessing/TargetEncoder.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L353)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/preprocessing/TargetEncoder.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L478)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/preprocessing/TargetEncoder.ts:453](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L453)

***

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

**Returns** `void`

**Defined in** [generated/preprocessing/TargetEncoder.ts:74](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L74)

***

### target\_mean\_

**Get Signature**

> **get** **target\_mean\_**(): `Promise`\<`number`\>

The overall mean of the target. This value is only used in [`transform`](https://scikit-learn.org/stable/modules/generated/#sklearn.preprocessing.TargetEncoder.transform "sklearn.preprocessing.TargetEncoder.transform") to encode categories.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/preprocessing/TargetEncoder.ts:428](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L428)

***

### target\_type\_

**Get Signature**

> **get** **target\_type\_**(): `Promise`\<`string`\>

Type of target.

**Returns** `Promise`\<`string`\>

**Defined in** [generated/preprocessing/TargetEncoder.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L403)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/preprocessing/TargetEncoder.ts:126](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L126)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the [`TargetEncoder`](https://scikit-learn.org/stable/modules/generated/#sklearn.preprocessing.TargetEncoder "sklearn.preprocessing.TargetEncoder") to X and y.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike`[] | The data to determine the categories of each feature. |
| `opts.y`? | `ArrayLike` | The target data used to encode the categories. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/preprocessing/TargetEncoder.ts:143](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L143)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Fit [`TargetEncoder`](https://scikit-learn.org/stable/modules/generated/#sklearn.preprocessing.TargetEncoder "sklearn.preprocessing.TargetEncoder") and transform X with the target encoding.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike`[] | The data to determine the categories of each feature. |
| `opts.y`? | `ArrayLike` | The target data used to encode the categories. |

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/preprocessing/TargetEncoder.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L180)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.input_features`? | `any` | Not used, present here for API consistency by convention. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/preprocessing/TargetEncoder.ts:217](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L217)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/preprocessing/TargetEncoder.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L253)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

**Returns** `Promise`\<`void`\>

**Defined in** [generated/preprocessing/TargetEncoder.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L87)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See [Introducing the set_output API](https://scikit-learn.org/stable/modules/generated/../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.transform`? | `"default"` \| `"pandas"` \| `"polars"` | Configure output of `transform` and `fit_transform`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/preprocessing/TargetEncoder.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L289)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Transform X with the target encoding.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike`[] | The data to determine the categories of each feature. |

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/preprocessing/TargetEncoder.ts:321](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L321)
