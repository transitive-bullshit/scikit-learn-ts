# SparseRandomProjectionOptions

## Properties

### compute\_inverse\_components?

> `boolean`

Learn the inverse transform by computing the pseudo-inverse of the components during fit. Note that the pseudo-inverse is always a dense array, even if the training data was sparse. This means that it might be necessary to call `inverse\_transform` on a small batch of samples at a time to avoid exhausting the available memory on the host. Moreover, computing the pseudo-inverse does not scale well to large matrices.

#### Default Value

`false`

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:531](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L531)

### dense\_output?

> `boolean`

If `true`, ensure that the output of the random projection is a dense numpy array even if the input and random projection matrix are both sparse. In practice, if the number of components is small the number of zero components in the projected data will be very small and it will be more CPU and memory efficient to use a dense representation.

If `false`, the projected data uses a sparse representation if the input is sparse.

#### Default Value

`false`

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:524](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L524)

### density?

> `number` \| `"auto"`

Ratio in the range (0, 1\] of non-zero component in the random projection matrix.

If density = ‘auto’, the value is set to the minimum density as recommended by Ping Li et al.: 1 / sqrt(n\_features).

Use density = 1 / 3.0 if you want to reproduce the results from Achlioptas, 2001.

#### Default Value

`'auto'`

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:506](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L506)

### eps?

> `number`

Parameter to control the quality of the embedding according to the Johnson-Lindenstrauss lemma when n\_components is set to ‘auto’. This value should be strictly positive.

Smaller values lead to better embedding and higher number of dimensions (n\_components) in the target projection space.

#### Default Value

`0.1`

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:515](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L515)

### n\_components?

> `number` \| `"auto"`

Dimensionality of the target projection space.

n\_components can be automatically adjusted according to the number of samples in the dataset and the bound given by the Johnson-Lindenstrauss lemma. In that case the quality of the embedding is controlled by the `eps` parameter.

It should be noted that Johnson-Lindenstrauss lemma can yield very conservative estimated of the required number of components as it makes no assumption on the structure of the dataset.

#### Default Value

`'auto'`

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:495](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L495)

### random\_state?

> `number`

Controls the pseudo random number generator used to generate the projection matrix at fit time. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/random\_projection/SparseRandomProjection.ts:536](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/random_projection/SparseRandomProjection.ts#L536)
