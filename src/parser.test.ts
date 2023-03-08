import test from 'ava'

import { parseDocType } from './parser'

const fixtures = [
  {
    namespace: 'sklearn.manifold',
    name: 'TSNE',
    params: [
      {
        name: 'n_components',
        type: 'int, default=2'
      },
      {
        name: 'perplexity',
        type: 'float, default=30.0'
      },
      {
        name: 'early_exaggeration',
        type: 'float, default=12.0'
      },
      {
        name: 'learning_rate',
        type: 'float or “auto”, default=”auto”'
      },
      {
        name: 'n_iter',
        type: 'int, default=1000'
      },
      {
        name: 'n_iter_without_progress',
        type: 'int, default=300'
      },
      {
        name: 'min_grad_norm',
        type: 'float, default=1e-7'
      },
      {
        name: 'metric',
        type: 'str or callable, default=’euclidean’'
      },
      {
        name: 'metric_params',
        type: 'dict, default=None'
      },
      {
        name: 'init',
        type: '{“random”, “pca”} or ndarray of shape (n_samples, n_components),             default=”pca”'
      },
      {
        name: 'verbose',
        type: 'int, default=0'
      },
      {
        name: 'random_state',
        type: 'int, RandomState instance or None, default=None'
      },
      {
        name: 'method',
        type: '{‘barnes_hut’, ‘exact’}, default=’barnes_hut’'
      },
      {
        name: 'angle',
        type: 'float, default=0.5'
      },
      {
        name: 'n_jobs',
        type: 'int, default=None'
      },
      {
        name: 'square_distances',
        type: 'True, default=’deprecated’'
      }
    ],
    attribs: [
      {
        name: 'embedding_',
        type: 'array-like of shape (n_samples, n_components)'
      },
      {
        name: 'kl_divergence_',
        type: 'float'
      },
      {
        name: 'n_features_in_',
        type: 'int'
      },
      {
        name: 'feature_names_in_',
        type: 'ndarray of shape (n_features_in_,)'
      },
      {
        name: 'learning_rate_',
        type: 'float'
      },
      { name: 'n_iter_', type: 'int' }
    ]
  },
  {
    namespace: 'sklearn.cluster',
    name: 'KMeans',
    params: [
      {
        name: 'X',
        type: '{array-like, sparse matrix} of shape (n_samples, n_features)'
      },
      { name: 'n_clusters', type: 'int' },
      {
        name: 'sample_weight',
        type: 'array-like of shape (n_samples,), default=None'
      },
      {
        name: 'init',
        type: '{‘k-means++’, ‘random’}, callable or array-like of shape             (n_clusters, n_features), default=’k-means++’'
      },
      { name: 'n_init', type: '‘auto’ or int, default=10' },
      { name: 'max_iter', type: 'int, default=300' },
      { name: 'verbose', type: 'bool, default=False' },
      { name: 'tol', type: 'float, default=1e-4' },
      {
        name: 'random_state',
        type: 'int, RandomState instance or None, default=None'
      },
      { name: 'copy_x', type: 'bool, default=True' },
      {
        name: 'algorithm',
        type: '{“lloyd”, “elkan”, “auto”, “full”}, default=”lloyd”'
      },
      { name: 'return_n_iter', type: 'bool, default=False' }
    ],
    attribs: [
      {
        name: 'centroid',
        type: 'ndarray of shape (n_clusters, n_features)'
      },
      { name: 'label', type: 'ndarray of shape (n_samples,)' },
      { name: 'inertia', type: 'float' },
      { name: 'best_n_iter', type: 'int' }
    ]
  },
  {
    namespace: 'sklearn.preprocessing',
    name: 'StandardScaler',
    params: [
      { name: 'copy', type: 'bool, default=True' },
      { name: 'with_mean', type: 'bool, default=True' },
      { name: 'with_std', type: 'bool, default=True' }
    ],
    attribs: [
      { name: 'scale_', type: 'ndarray of shape (n_features,) or None' },
      { name: 'mean_', type: 'ndarray of shape (n_features,) or None' },
      { name: 'var_', type: 'ndarray of shape (n_features,) or None' },
      { name: 'n_features_in_', type: 'int' },
      {
        name: 'feature_names_in_',
        type: 'ndarray of shape (n_features_in_,)'
      },
      {
        name: 'n_samples_seen_',
        type: 'int or ndarray of shape (n_features,)'
      }
    ]
  },
  {
    namespace: 'sklearn.decomposition',
    name: 'PCA',
    params: [
      { name: 'n_components', type: 'int, float or ‘mle’, default=None' },
      { name: 'copy', type: 'bool, default=True' },
      { name: 'whiten', type: 'bool, default=False' },
      {
        name: 'svd_solver',
        type: '{‘auto’, ‘full’, ‘arpack’, ‘randomized’}, default=’auto’'
      },
      { name: 'tol', type: 'float, default=0.0' },
      { name: 'iterated_power', type: 'int or ‘auto’, default=’auto’' },
      { name: 'n_oversamples', type: 'int, default=10' },
      {
        name: 'power_iteration_normalizer',
        type: '{‘auto’, ‘QR’, ‘LU’, ‘none’}, default=’auto’'
      },
      {
        name: 'random_state',
        type: 'int, RandomState instance or None, default=None'
      }
    ],
    attribs: [
      {
        name: 'components_',
        type: 'ndarray of shape (n_components, n_features)'
      },
      {
        name: 'explained_variance_',
        type: 'ndarray of shape (n_components,)'
      },
      {
        name: 'explained_variance_ratio_',
        type: 'ndarray of shape (n_components,)'
      },
      {
        name: 'singular_values_',
        type: 'ndarray of shape (n_components,)'
      },
      { name: 'mean_', type: 'ndarray of shape (n_features,)' },
      { name: 'n_components_', type: 'int' },
      { name: 'n_features_', type: 'int' },
      { name: 'n_samples_', type: 'int' },
      { name: 'noise_variance_', type: 'float' },
      { name: 'n_features_in_', type: 'int' },
      {
        name: 'feature_names_in_',
        type: 'ndarray of shape (n_features_in_,)'
      }
    ]
  }
]

for (const fixture of fixtures) {
  for (const param of fixture.params.concat(fixture.attribs)) {
    test(`${fixture.name} parseType(${param.name})`, (t) => {
      const parsed = parseDocType(param.type)
      console.log({
        name: param.name,
        type: param.type,
        parsed: parsed
      })
      t.truthy(parsed)
    })
  }
}
