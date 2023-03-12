# AffinityPropagationOptions

## Properties

### affinity?

> `"euclidean"` \| `"precomputed"`

Which affinity to use. At the moment ‘precomputed’ and `euclidean` are supported. ‘euclidean’ uses the negative squared euclidean distance between points.

#### Default Value

`'euclidean'`

Defined in:  [generated/cluster/AffinityPropagation.ts:430](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L430)

### convergence\_iter?

> `number`

Number of iterations with no change in the number of estimated clusters that stops the convergence.

#### Default Value

`15`

Defined in:  [generated/cluster/AffinityPropagation.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L411)

### copy?

> `boolean`

Make a copy of input data.

#### Default Value

`true`

Defined in:  [generated/cluster/AffinityPropagation.ts:418](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L418)

### damping?

> `number`

Damping factor in the range `\[0.5, 1.0)` is the extent to which the current value is maintained relative to incoming values (weighted 1 - damping). This in order to avoid numerical oscillations when updating these values (messages).

#### Default Value

`0.5`

Defined in:  [generated/cluster/AffinityPropagation.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L397)

### max\_iter?

> `number`

Maximum number of iterations.

#### Default Value

`200`

Defined in:  [generated/cluster/AffinityPropagation.ts:404](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L404)

### preference?

> `number` \| [`ArrayLike`](../types/ArrayLike.md)

Preferences for each point - points with larger values of preferences are more likely to be chosen as exemplars. The number of exemplars, ie of clusters, is influenced by the input preferences value. If the preferences are not passed as arguments, they will be set to the median of the input similarities.

Defined in:  [generated/cluster/AffinityPropagation.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L423)

### random\_state?

> `number`

Pseudo-random number generator to control the starting state. Use an int for reproducible results across function calls. See the [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/cluster/AffinityPropagation.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L442)

### verbose?

> `boolean`

Whether to be verbose.

#### Default Value

`false`

Defined in:  [generated/cluster/AffinityPropagation.ts:437](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L437)
