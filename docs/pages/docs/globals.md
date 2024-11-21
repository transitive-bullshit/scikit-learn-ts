# sklearn

## Classes

<table>
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[AdaBoostClassifier](classes/AdaBoostClassifier.md)

</td>
<td>

An AdaBoost classifier.

An AdaBoost [\[1\]](https://scikit-learn.org/stable/modules/generated/#r33e4ec8c4ad5-1) classifier is a meta-estimator that begins by fitting a classifier on the original dataset and then fits additional copies of the classifier on the same dataset but where the weights of incorrectly classified instances are adjusted such that subsequent classifiers focus more on difficult cases.

This class implements the algorithm based on [\[2\]](https://scikit-learn.org/stable/modules/generated/#r33e4ec8c4ad5-2).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../ensemble.html#adaboost).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.AdaBoostClassifier.html)

</td>
</tr>
<tr>
<td>

[AdaBoostRegressor](classes/AdaBoostRegressor.md)

</td>
<td>

An AdaBoost regressor.

An AdaBoost \[1\] regressor is a meta-estimator that begins by fitting a regressor on the original dataset and then fits additional copies of the regressor on the same dataset but where the weights of instances are adjusted according to the error of the current prediction. As such, subsequent regressors focus more on difficult cases.

This class implements the algorithm known as AdaBoost.R2 \[2\].

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../ensemble.html#adaboost).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.AdaBoostRegressor.html)

</td>
</tr>
<tr>
<td>

[AdditiveChi2Sampler](classes/AdditiveChi2Sampler.md)

</td>
<td>

Approximate feature map for additive chi2 kernel.

Uses sampling the fourier transform of the kernel characteristic at regular intervals.

Since the kernel that is to be approximated is additive, the components of the input vectors can be treated separately. Each entry in the original space is transformed into 2\*sample_steps-1 features, where sample_steps is a parameter of the method. Typical values of sample_steps include 1, 2 and 3.

Optimal choices for the sampling interval for certain data ranges can be computed (see the reference). The default values should be reasonable.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../kernel_approximation.html#additive-chi-kernel-approx).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.AdditiveChi2Sampler.html)

</td>
</tr>
<tr>
<td>

[AffinityPropagation](classes/AffinityPropagation.md)

</td>
<td>

Perform Affinity Propagation Clustering of data.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../clustering.html#affinity-propagation).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.AffinityPropagation.html)

</td>
</tr>
<tr>
<td>

[AgglomerativeClustering](classes/AgglomerativeClustering.md)

</td>
<td>

Agglomerative Clustering.

Recursively merges pair of clusters of sample data; uses linkage distance.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../clustering.html#hierarchical-clustering).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.AgglomerativeClustering.html)

</td>
</tr>
<tr>
<td>

[ARDRegression](classes/ARDRegression.md)

</td>
<td>

Bayesian ARD regression.

Fit the weights of a regression model, using an ARD prior. The weights of the regression model are assumed to be in Gaussian distributions. Also estimate the parameters lambda (precisions of the distributions of the weights) and alpha (precision of the distribution of the noise). The estimation is done by an iterative procedures (Evidence Maximization)

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#bayesian-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.ARDRegression.html)

</td>
</tr>
<tr>
<td>

[BaggingClassifier](classes/BaggingClassifier.md)

</td>
<td>

A Bagging classifier.

A Bagging classifier is an ensemble meta-estimator that fits base classifiers each on random subsets of the original dataset and then aggregate their individual predictions (either by voting or by averaging) to form a final prediction. Such a meta-estimator can typically be used as a way to reduce the variance of a black-box estimator (e.g., a decision tree), by introducing randomization into its construction procedure and then making an ensemble out of it.

This algorithm encompasses several works from the literature. When random subsets of the dataset are drawn as random subsets of the samples, then this algorithm is known as Pasting [\[1\]](https://scikit-learn.org/stable/modules/generated/#rb1846455d0e5-1). If samples are drawn with replacement, then the method is known as Bagging [\[2\]](https://scikit-learn.org/stable/modules/generated/#rb1846455d0e5-2). When random subsets of the dataset are drawn as random subsets of the features, then the method is known as Random Subspaces [\[3\]](https://scikit-learn.org/stable/modules/generated/#rb1846455d0e5-3). Finally, when base estimators are built on subsets of both samples and features, then the method is known as Random Patches [\[4\]](https://scikit-learn.org/stable/modules/generated/#rb1846455d0e5-4).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../ensemble.html#bagging).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.BaggingClassifier.html)

</td>
</tr>
<tr>
<td>

[BaggingRegressor](classes/BaggingRegressor.md)

</td>
<td>

A Bagging regressor.

A Bagging regressor is an ensemble meta-estimator that fits base regressors each on random subsets of the original dataset and then aggregate their individual predictions (either by voting or by averaging) to form a final prediction. Such a meta-estimator can typically be used as a way to reduce the variance of a black-box estimator (e.g., a decision tree), by introducing randomization into its construction procedure and then making an ensemble out of it.

This algorithm encompasses several works from the literature. When random subsets of the dataset are drawn as random subsets of the samples, then this algorithm is known as Pasting [\[1\]](https://scikit-learn.org/stable/modules/generated/#r4d113ba76fc0-1). If samples are drawn with replacement, then the method is known as Bagging [\[2\]](https://scikit-learn.org/stable/modules/generated/#r4d113ba76fc0-2). When random subsets of the dataset are drawn as random subsets of the features, then the method is known as Random Subspaces [\[3\]](https://scikit-learn.org/stable/modules/generated/#r4d113ba76fc0-3). Finally, when base estimators are built on subsets of both samples and features, then the method is known as Random Patches [\[4\]](https://scikit-learn.org/stable/modules/generated/#r4d113ba76fc0-4).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../ensemble.html#bagging).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.BaggingRegressor.html)

</td>
</tr>
<tr>
<td>

[BallTree](classes/BallTree.md)

</td>
<td>

BallTree for fast generalized N-point problems

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../neighbors.html#unsupervised-neighbors).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.BallTree.html)

</td>
</tr>
<tr>
<td>

[BayesianGaussianMixture](classes/BayesianGaussianMixture.md)

</td>
<td>

Variational Bayesian estimation of a Gaussian mixture.

This class allows to infer an approximate posterior distribution over the parameters of a Gaussian mixture distribution. The effective number of components can be inferred from the data.

This class implements two types of prior for the weights distribution: a finite mixture model with Dirichlet distribution and an infinite mixture model with the Dirichlet Process. In practice Dirichlet Process inference algorithm is approximated and uses a truncated distribution with a fixed maximum number of components (called the Stick-breaking representation). The number of components actually used almost always depends on the data.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.mixture.BayesianGaussianMixture.html)

</td>
</tr>
<tr>
<td>

[BayesianRidge](classes/BayesianRidge.md)

</td>
<td>

Bayesian ridge regression.

Fit a Bayesian ridge model. See the Notes section for details on this implementation and the optimization of the regularization parameters lambda (precision of the weights) and alpha (precision of the noise).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#bayesian-regression). For an intuitive visualization of how the sinusoid is approximated by a polynomial using different pairs of initial values, see [Curve Fitting with Bayesian Ridge Regression](https://scikit-learn.org/stable/modules/generated/../../auto_examples/linear_model/plot_bayesian_ridge_curvefit.html#sphx-glr-auto-examples-linear-model-plot-bayesian-ridge-curvefit-py).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.BayesianRidge.html)

</td>
</tr>
<tr>
<td>

[BernoulliNB](classes/BernoulliNB.md)

</td>
<td>

Naive Bayes classifier for multivariate Bernoulli models.

Like MultinomialNB, this classifier is suitable for discrete data. The difference is that while MultinomialNB works with occurrence counts, BernoulliNB is designed for binary/boolean features.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../naive_bayes.html#bernoulli-naive-bayes).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.BernoulliNB.html)

</td>
</tr>
<tr>
<td>

[BernoulliRBM](classes/BernoulliRBM.md)

</td>
<td>

Bernoulli Restricted Boltzmann Machine (RBM).

A Restricted Boltzmann Machine with binary visible units and binary hidden units. Parameters are estimated using Stochastic Maximum Likelihood (SML), also known as Persistent Contrastive Divergence (PCD) \[2\].

The time complexity of this implementation is `O(d \*\* 2)` assuming d ~ n_features ~ n_components.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../neural_networks_unsupervised.html#rbm).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.BernoulliRBM.html)

</td>
</tr>
<tr>
<td>

[Binarizer](classes/Binarizer.md)

</td>
<td>

Binarize data (set feature values to 0 or 1) according to a threshold.

Values greater than the threshold map to 1, while values less than or equal to the threshold map to 0. With the default threshold of 0, only positive values map to 1.

Binarization is a common operation on text count data where the analyst can decide to only consider the presence or absence of a feature rather than a quantified number of occurrences for instance.

It can also be used as a pre-processing step for estimators that consider boolean random variables (e.g. modelled using the Bernoulli distribution in a Bayesian setting).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../preprocessing.html#preprocessing-binarization).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.Binarizer.html)

</td>
</tr>
<tr>
<td>

[Birch](classes/Birch.md)

</td>
<td>

Implements the BIRCH clustering algorithm.

It is a memory-efficient, online-learning algorithm provided as an alternative to [`MiniBatchKMeans`](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.MiniBatchKMeans.html#sklearn.cluster.MiniBatchKMeans "sklearn.cluster.MiniBatchKMeans"). It constructs a tree data structure with the cluster centroids being read off the leaf. These can be either the final cluster centroids or can be provided as input to another clustering algorithm such as [`AgglomerativeClustering`](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.AgglomerativeClustering.html#sklearn.cluster.AgglomerativeClustering "sklearn.cluster.AgglomerativeClustering").

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../clustering.html#birch).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.Birch.html)

</td>
</tr>
<tr>
<td>

[BisectingKMeans](classes/BisectingKMeans.md)

</td>
<td>

Bisecting K-Means clustering.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../clustering.html#bisect-k-means).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.BisectingKMeans.html)

</td>
</tr>
<tr>
<td>

[Bunch](classes/Bunch.md)

</td>
<td>

Container object exposing keys as attributes.

Bunch objects are sometimes used as an output for functions and methods. They extend dictionaries by enabling values to be accessed by key, `bunch\["value_key"\]`, or by an attribute, `bunch.value_key`.

Examples

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.utils.Bunch.html)

</td>
</tr>
<tr>
<td>

[CalibratedClassifierCV](classes/CalibratedClassifierCV.md)

</td>
<td>

Probability calibration with isotonic regression or logistic regression.

This class uses cross-validation to both estimate the parameters of a classifier and subsequently calibrate a classifier. With default `ensemble=True`, for each cv split it fits a copy of the base estimator to the training subset, and calibrates it using the testing subset. For prediction, predicted probabilities are averaged across these individual calibrated classifiers. When `ensemble=False`, cross-validation is used to obtain unbiased predictions, via [`cross_val_predict`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.cross_val_predict.html#sklearn.model_selection.cross_val_predict "sklearn.model_selection.cross_val_predict"), which are then used for calibration. For prediction, the base estimator, trained using all the data, is used. This is the prediction method implemented when `probabilities=True` for [`SVC`](https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC.html#sklearn.svm.SVC "sklearn.svm.SVC") and [`NuSVC`](https://scikit-learn.org/stable/modules/generated/sklearn.svm.NuSVC.html#sklearn.svm.NuSVC "sklearn.svm.NuSVC") estimators (see [User Guide](https://scikit-learn.org/stable/modules/generated/../svm.html#scores-probabilities) for details).

Already fitted classifiers can be calibrated via the parameter `cv="prefit"`. In this case, no cross-validation is used and all provided data is used for calibration. The user has to take care manually that data for model fitting and calibration are disjoint.

The calibration is based on the [decision_function](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-decision_function) method of the `estimator` if it exists, else on [predict_proba](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict_proba).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../calibration.html#calibration). In order to learn more on the CalibratedClassifierCV class, see the following calibration examples: [Probability calibration of classifiers](https://scikit-learn.org/stable/modules/generated/../../auto_examples/calibration/plot_calibration.html#sphx-glr-auto-examples-calibration-plot-calibration-py), [Probability Calibration curves](https://scikit-learn.org/stable/modules/generated/../../auto_examples/calibration/plot_calibration_curve.html#sphx-glr-auto-examples-calibration-plot-calibration-curve-py), and [Probability Calibration for 3-class classification](https://scikit-learn.org/stable/modules/generated/../../auto_examples/calibration/plot_calibration_multiclass.html#sphx-glr-auto-examples-calibration-plot-calibration-multiclass-py).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.calibration.CalibratedClassifierCV.html)

</td>
</tr>
<tr>
<td>

[CalibrationDisplay](classes/CalibrationDisplay.md)

</td>
<td>

Calibration curve (also known as reliability diagram) visualization.

It is recommended to use [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.calibration.CalibrationDisplay.from_estimator "sklearn.calibration.CalibrationDisplay.from_estimator") or [`from_predictions`](https://scikit-learn.org/stable/modules/generated/#sklearn.calibration.CalibrationDisplay.from_predictions "sklearn.calibration.CalibrationDisplay.from_predictions") to create a `CalibrationDisplay`. All parameters are stored as attributes.

Read more about calibration in the [User Guide](https://scikit-learn.org/stable/modules/generated/../calibration.html#calibration) and more about the scikit-learn visualization API in [Visualizations](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations).

For an example on how to use the visualization, see [Probability Calibration curves](https://scikit-learn.org/stable/modules/generated/../../auto_examples/calibration/plot_calibration_curve.html#sphx-glr-auto-examples-calibration-plot-calibration-curve-py).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.calibration.CalibrationDisplay.html)

</td>
</tr>
<tr>
<td>

[CategoricalNB](classes/CategoricalNB.md)

</td>
<td>

Naive Bayes classifier for categorical features.

The categorical Naive Bayes classifier is suitable for classification with discrete features that are categorically distributed. The categories of each feature are drawn from a categorical distribution.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../naive_bayes.html#categorical-naive-bayes).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.CategoricalNB.html)

</td>
</tr>
<tr>
<td>

[CCA](classes/CCA.md)

</td>
<td>

Canonical Correlation Analysis, also known as “Mode B” PLS.

For a comparison between other cross decomposition algorithms, see [Compare cross decomposition methods](https://scikit-learn.org/stable/modules/generated/../../auto_examples/cross_decomposition/plot_compare_cross_decomposition.html#sphx-glr-auto-examples-cross-decomposition-plot-compare-cross-decomposition-py).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../cross_decomposition.html#cross-decomposition).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cross_decomposition.CCA.html)

</td>
</tr>
<tr>
<td>

[ClassifierChain](classes/ClassifierChain.md)

</td>
<td>

A multi-label model that arranges binary classifiers into a chain.

Each model makes a prediction in the order specified by the chain using all of the available features provided to the model plus the predictions of models that are earlier in the chain.

For an example of how to use `ClassifierChain` and benefit from its ensemble, see [ClassifierChain on a yeast dataset](https://scikit-learn.org/stable/modules/generated/../../auto_examples/multioutput/plot_classifier_chain_yeast.html#sphx-glr-auto-examples-multioutput-plot-classifier-chain-yeast-py) example.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../multiclass.html#classifierchain).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multioutput.ClassifierChain.html)

</td>
</tr>
<tr>
<td>

[ColumnTransformer](classes/ColumnTransformer.md)

</td>
<td>

Applies transformers to columns of an array or pandas DataFrame.

This estimator allows different columns or column subsets of the input to be transformed separately and the features generated by each transformer will be concatenated to form a single feature space. This is useful for heterogeneous or columnar data, to combine several feature extraction mechanisms or transformations into a single transformer.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../compose.html#column-transformer).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.compose.ColumnTransformer.html)

</td>
</tr>
<tr>
<td>

[ComplementNB](classes/ComplementNB.md)

</td>
<td>

The Complement Naive Bayes classifier described in Rennie et al. (2003).

The Complement Naive Bayes classifier was designed to correct the “severe assumptions” made by the standard Multinomial Naive Bayes classifier. It is particularly suited for imbalanced data sets.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../naive_bayes.html#complement-naive-bayes).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.ComplementNB.html)

</td>
</tr>
<tr>
<td>

[CompoundKernel](classes/CompoundKernel.md)

</td>
<td>

Kernel which is composed of a set of other kernels.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.CompoundKernel.html)

</td>
</tr>
<tr>
<td>

[ConfusionMatrixDisplay](classes/ConfusionMatrixDisplay.md)

</td>
<td>

Confusion Matrix visualization.

It is recommend to use [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.ConfusionMatrixDisplay.from_estimator "sklearn.metrics.ConfusionMatrixDisplay.from_estimator") or [`from_predictions`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.ConfusionMatrixDisplay.from_predictions "sklearn.metrics.ConfusionMatrixDisplay.from_predictions") to create a [`ConfusionMatrixDisplay`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.ConfusionMatrixDisplay "sklearn.metrics.ConfusionMatrixDisplay"). All parameters are stored as attributes.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.ConfusionMatrixDisplay.html)

</td>
</tr>
<tr>
<td>

[ConstantKernel](classes/ConstantKernel.md)

</td>
<td>

Constant kernel.

Can be used as part of a product-kernel where it scales the magnitude of the other factor (kernel) or as part of a sum-kernel, where it modifies the mean of the Gaussian process.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.ConstantKernel.html)

</td>
</tr>
<tr>
<td>

[CountVectorizer](classes/CountVectorizer.md)

</td>
<td>

Convert a collection of text documents to a matrix of token counts.

This implementation produces a sparse representation of the counts using scipy.sparse.csr_matrix.

If you do not provide an a-priori dictionary and you do not use an analyzer that does some kind of feature selection then the number of features will be equal to the vocabulary size found by analyzing the data.

For an efficiency comparison of the different feature extractors, see [FeatureHasher and DictVectorizer Comparison](https://scikit-learn.org/stable/modules/generated/../../auto_examples/text/plot_hashing_vs_dict_vectorizer.html#sphx-glr-auto-examples-text-plot-hashing-vs-dict-vectorizer-py).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../feature_extraction.html#text-feature-extraction).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.CountVectorizer.html)

</td>
</tr>
<tr>
<td>

[DBSCAN](classes/DBSCAN.md)

</td>
<td>

Perform DBSCAN clustering from vector array or distance matrix.

DBSCAN - Density-Based Spatial Clustering of Applications with Noise. Finds core samples of high density and expands clusters from them. Good for data which contains clusters of similar density.

This implementation has a worst case memory complexity of \\(O({n}^2)\\), which can occur when the `eps` param is large and `min_samples` is low, while the original DBSCAN only uses linear memory. For further details, see the Notes below.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../clustering.html#dbscan).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.DBSCAN.html)

</td>
</tr>
<tr>
<td>

[DecisionBoundaryDisplay](classes/DecisionBoundaryDisplay.md)

</td>
<td>

Decisions boundary visualization.

It is recommended to use [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.inspection.DecisionBoundaryDisplay.from_estimator "sklearn.inspection.DecisionBoundaryDisplay.from_estimator") to create a [`DecisionBoundaryDisplay`](https://scikit-learn.org/stable/modules/generated/#sklearn.inspection.DecisionBoundaryDisplay "sklearn.inspection.DecisionBoundaryDisplay"). All parameters are stored as attributes.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.inspection.DecisionBoundaryDisplay.html)

</td>
</tr>
<tr>
<td>

[DecisionTreeClassifier](classes/DecisionTreeClassifier.md)

</td>
<td>

A decision tree classifier.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../tree.html#tree).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeClassifier.html)

</td>
</tr>
<tr>
<td>

[DecisionTreeRegressor](classes/DecisionTreeRegressor.md)

</td>
<td>

A decision tree regressor.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../tree.html#tree).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeRegressor.html)

</td>
</tr>
<tr>
<td>

[DetCurveDisplay](classes/DetCurveDisplay.md)

</td>
<td>

DET curve visualization.

It is recommend to use [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.DetCurveDisplay.from_estimator "sklearn.metrics.DetCurveDisplay.from_estimator") or [`from_predictions`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.DetCurveDisplay.from_predictions "sklearn.metrics.DetCurveDisplay.from_predictions") to create a visualizer. All parameters are stored as attributes.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.DetCurveDisplay.html)

</td>
</tr>
<tr>
<td>

[DictionaryLearning](classes/DictionaryLearning.md)

</td>
<td>

Dictionary learning.

Finds a dictionary (a set of atoms) that performs well at sparsely encoding the fitted data.

Solves the optimization problem:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.DictionaryLearning.html)

</td>
</tr>
<tr>
<td>

[DictVectorizer](classes/DictVectorizer.md)

</td>
<td>

Transforms lists of feature-value mappings to vectors.

This transformer turns lists of mappings (dict-like objects) of feature names to feature values into Numpy arrays or scipy.sparse matrices for use with scikit-learn estimators.

When feature values are strings, this transformer will do a binary one-hot (aka one-of-K) coding: one boolean-valued feature is constructed for each of the possible string values that the feature can take on. For instance, a feature “f” that can take on the values “ham” and “spam” will become two features in the output, one signifying “f=ham”, the other “f=spam”.

If a feature value is a sequence or set of strings, this transformer will iterate over the values and will count the occurrences of each string value.

However, note that this transformer will only do a binary one-hot encoding when feature values are of type string. If categorical features are represented as numeric values such as int or iterables of strings, the DictVectorizer can be followed by [`OneHotEncoder`](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.OneHotEncoder.html#sklearn.preprocessing.OneHotEncoder "sklearn.preprocessing.OneHotEncoder") to complete binary one-hot encoding.

Features that do not occur in a sample (mapping) will have a zero value in the resulting array/matrix.

For an efficiency comparison of the different feature extractors, see [FeatureHasher and DictVectorizer Comparison](https://scikit-learn.org/stable/modules/generated/../../auto_examples/text/plot_hashing_vs_dict_vectorizer.html#sphx-glr-auto-examples-text-plot-hashing-vs-dict-vectorizer-py).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../feature_extraction.html#dict-feature-extraction).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.DictVectorizer.html)

</td>
</tr>
<tr>
<td>

[DistanceMetric](classes/DistanceMetric.md)

</td>
<td>

Uniform interface for fast distance metric functions.

The `DistanceMetric` class provides a convenient way to compute pairwise distances between samples. It supports various distance metrics, such as Euclidean distance, Manhattan distance, and more.

The `pairwise` method can be used to compute pairwise distances between samples in the input arrays. It returns a distance matrix representing the distances between all pairs of samples.

The [`get_metric`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.DistanceMetric.get_metric "sklearn.metrics.DistanceMetric.get_metric") method allows you to retrieve a specific metric using its string identifier.

Examples

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.DistanceMetric.html)

</td>
</tr>
<tr>
<td>

[DotProduct](classes/DotProduct.md)

</td>
<td>

Dot-Product kernel.

The DotProduct kernel is non-stationary and can be obtained from linear regression by putting \\(N(0, 1)\\) priors on the coefficients of \\(x_d (d = 1, . . . , D)\\) and a prior of \\(N(0, \\sigma_0^2)\\) on the bias. The DotProduct kernel is invariant to a rotation of the coordinates about the origin, but not translations. It is parameterized by a parameter sigma_0 \\(\\sigma\\) which controls the inhomogenity of the kernel. For \\(\\sigma_0^2 =0\\), the kernel is called the homogeneous linear kernel, otherwise it is inhomogeneous. The kernel is given by

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.DotProduct.html)

</td>
</tr>
<tr>
<td>

[DummyClassifier](classes/DummyClassifier.md)

</td>
<td>

DummyClassifier makes predictions that ignore the input features.

This classifier serves as a simple baseline to compare against other more complex classifiers.

The specific behavior of the baseline is selected with the `strategy` parameter.

All strategies make predictions that ignore the input feature values passed as the `X` argument to `fit` and `predict`. The predictions, however, typically depend on values observed in the `y` parameter passed to `fit`.

Note that the “stratified” and “uniform” strategies lead to non-deterministic predictions that can be rendered deterministic by setting the `random_state` parameter if needed. The other strategies are naturally deterministic and, once fit, always return the same constant prediction for any value of `X`.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../model_evaluation.html#dummy-estimators).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.dummy.DummyClassifier.html)

</td>
</tr>
<tr>
<td>

[DummyRegressor](classes/DummyRegressor.md)

</td>
<td>

Regressor that makes predictions using simple rules.

This regressor is useful as a simple baseline to compare with other (real) regressors. Do not use it for real problems.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../model_evaluation.html#dummy-estimators).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.dummy.DummyRegressor.html)

</td>
</tr>
<tr>
<td>

[ElasticNet](classes/ElasticNet.md)

</td>
<td>

Linear regression with combined L1 and L2 priors as regularizer.

Minimizes the objective function:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.ElasticNet.html)

</td>
</tr>
<tr>
<td>

[ElasticNetCV](classes/ElasticNetCV.md)

</td>
<td>

Elastic Net model with iterative fitting along a regularization path.

See glossary entry for [cross-validation estimator](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-cross-validation-estimator).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#elastic-net).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.ElasticNetCV.html)

</td>
</tr>
<tr>
<td>

[EllipticEnvelope](classes/EllipticEnvelope.md)

</td>
<td>

An object for detecting outliers in a Gaussian distributed dataset.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../outlier_detection.html#outlier-detection).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.EllipticEnvelope.html)

</td>
</tr>
<tr>
<td>

[EmpiricalCovariance](classes/EmpiricalCovariance.md)

</td>
<td>

Maximum likelihood covariance estimator.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../covariance.html#covariance).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.EmpiricalCovariance.html)

</td>
</tr>
<tr>
<td>

[Exponentiation](classes/Exponentiation.md)

</td>
<td>

The Exponentiation kernel takes one base kernel and a scalar parameter \\(p\\) and combines them via

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.Exponentiation.html)

</td>
</tr>
<tr>
<td>

[ExpSineSquared](classes/ExpSineSquared.md)

</td>
<td>

Exp-Sine-Squared kernel (aka periodic kernel).

The ExpSineSquared kernel allows one to model functions which repeat themselves exactly. It is parameterized by a length scale parameter \\(l>0\\) and a periodicity parameter \\(p>0\\). Only the isotropic variant where \\(l\\) is a scalar is supported at the moment. The kernel is given by:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.ExpSineSquared.html)

</td>
</tr>
<tr>
<td>

[ExtraTreeClassifier](classes/ExtraTreeClassifier.md)

</td>
<td>

An extremely randomized tree classifier.

Extra-trees differ from classic decision trees in the way they are built. When looking for the best split to separate the samples of a node into two groups, random splits are drawn for each of the `max_features` randomly selected features and the best split among those is chosen. When `max_features` is set 1, this amounts to building a totally random decision tree.

Warning: Extra-trees should only be used within ensemble methods.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../tree.html#tree).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.tree.ExtraTreeClassifier.html)

</td>
</tr>
<tr>
<td>

[ExtraTreeRegressor](classes/ExtraTreeRegressor.md)

</td>
<td>

An extremely randomized tree regressor.

Extra-trees differ from classic decision trees in the way they are built. When looking for the best split to separate the samples of a node into two groups, random splits are drawn for each of the `max_features` randomly selected features and the best split among those is chosen. When `max_features` is set 1, this amounts to building a totally random decision tree.

Warning: Extra-trees should only be used within ensemble methods.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../tree.html#tree).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.tree.ExtraTreeRegressor.html)

</td>
</tr>
<tr>
<td>

[ExtraTreesClassifier](classes/ExtraTreesClassifier.md)

</td>
<td>

An extra-trees classifier.

This class implements a meta estimator that fits a number of randomized decision trees (a.k.a. extra-trees) on various sub-samples of the dataset and uses averaging to improve the predictive accuracy and control over-fitting.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../ensemble.html#forest).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.ExtraTreesClassifier.html)

</td>
</tr>
<tr>
<td>

[ExtraTreesRegressor](classes/ExtraTreesRegressor.md)

</td>
<td>

An extra-trees regressor.

This class implements a meta estimator that fits a number of randomized decision trees (a.k.a. extra-trees) on various sub-samples of the dataset and uses averaging to improve the predictive accuracy and control over-fitting.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../ensemble.html#forest).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.ExtraTreesRegressor.html)

</td>
</tr>
<tr>
<td>

[FactorAnalysis](classes/FactorAnalysis.md)

</td>
<td>

Factor Analysis (FA).

A simple linear generative model with Gaussian latent variables.

The observations are assumed to be caused by a linear transformation of lower dimensional latent factors and added Gaussian noise. Without loss of generality the factors are distributed according to a Gaussian with zero mean and unit covariance. The noise is also zero mean and has an arbitrary diagonal covariance matrix.

If we would restrict the model further, by assuming that the Gaussian noise is even isotropic (all diagonal entries are the same) we would obtain [`PCA`](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html#sklearn.decomposition.PCA "sklearn.decomposition.PCA").

FactorAnalysis performs a maximum likelihood estimate of the so-called `loading` matrix, the transformation of the latent variables to the observed ones, using SVD based approach.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../decomposition.html#fa).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.FactorAnalysis.html)

</td>
</tr>
<tr>
<td>

[FastICA](classes/FastICA.md)

</td>
<td>

FastICA: a fast algorithm for Independent Component Analysis.

The implementation is based on [\[1\]](https://scikit-learn.org/stable/modules/generated/#r44c805292efc-1).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../decomposition.html#ica).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.FastICA.html)

</td>
</tr>
<tr>
<td>

[FeatureAgglomeration](classes/FeatureAgglomeration.md)

</td>
<td>

Agglomerate features.

Recursively merges pair of clusters of features.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../clustering.html#hierarchical-clustering).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.FeatureAgglomeration.html)

</td>
</tr>
<tr>
<td>

[FeatureHasher](classes/FeatureHasher.md)

</td>
<td>

Implements feature hashing, aka the hashing trick.

This class turns sequences of symbolic feature names (strings) into scipy.sparse matrices, using a hash function to compute the matrix column corresponding to a name. The hash function employed is the signed 32-bit version of Murmurhash3.

Feature names of type byte string are used as-is. Unicode strings are converted to UTF-8 first, but no Unicode normalization is done. Feature values must be (finite) numbers.

This class is a low-memory alternative to DictVectorizer and CountVectorizer, intended for large-scale (online) learning and situations where memory is tight, e.g. when running prediction code on embedded devices.

For an efficiency comparison of the different feature extractors, see [FeatureHasher and DictVectorizer Comparison](https://scikit-learn.org/stable/modules/generated/../../auto_examples/text/plot_hashing_vs_dict_vectorizer.html#sphx-glr-auto-examples-text-plot-hashing-vs-dict-vectorizer-py).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../feature_extraction.html#feature-hashing).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.FeatureHasher.html)

</td>
</tr>
<tr>
<td>

[FeatureUnion](classes/FeatureUnion.md)

</td>
<td>

Concatenates results of multiple transformer objects.

This estimator applies a list of transformer objects in parallel to the input data, then concatenates the results. This is useful to combine several feature extraction mechanisms into a single transformer.

Parameters of the transformers may be set using its name and the parameter name separated by a ‘__’. A transformer may be replaced entirely by setting the parameter with its name to another transformer, removed by setting to ‘drop’ or disabled by setting to ‘passthrough’ (features are passed without transformation).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../compose.html#feature-union).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.FeatureUnion.html)

</td>
</tr>
<tr>
<td>

[FixedThresholdClassifier](classes/FixedThresholdClassifier.md)

</td>
<td>

Binary classifier that manually sets the decision threshold.

This classifier allows to change the default decision threshold used for converting posterior probability estimates (i.e. output of `predict_proba`) or decision scores (i.e. output of `decision_function`) into a class label.

Here, the threshold is not optimized and is set to a constant value.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../classification_threshold.html#fixedthresholdclassifier).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.FixedThresholdClassifier.html)

</td>
</tr>
<tr>
<td>

[FunctionTransformer](classes/FunctionTransformer.md)

</td>
<td>

Constructs a transformer from an arbitrary callable.

A FunctionTransformer forwards its X (and optionally y) arguments to a user-defined function or function object and returns the result of this function. This is useful for stateless transformations such as taking the log of frequencies, doing custom scaling, etc.

Note: If a lambda is used as the function, then the resulting transformer will not be pickleable.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.FunctionTransformer.html)

</td>
</tr>
<tr>
<td>

[GammaRegressor](classes/GammaRegressor.md)

</td>
<td>

Generalized Linear Model with a Gamma distribution.

This regressor uses the ‘log’ link function.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#generalized-linear-models).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.GammaRegressor.html)

</td>
</tr>
<tr>
<td>

[GaussianMixture](classes/GaussianMixture.md)

</td>
<td>

Gaussian Mixture.

Representation of a Gaussian mixture model probability distribution. This class allows to estimate the parameters of a Gaussian mixture distribution.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../mixture.html#gmm).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.mixture.GaussianMixture.html)

</td>
</tr>
<tr>
<td>

[GaussianNB](classes/GaussianNB.md)

</td>
<td>

Gaussian Naive Bayes (GaussianNB).

Can perform online updates to model parameters via [`partial_fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.naive_bayes.GaussianNB.partial_fit "sklearn.naive_bayes.GaussianNB.partial_fit"). For details on algorithm used to update feature means and variance online, see Stanford CS tech report STAN-CS-79-773 by Chan, Golub, and LeVeque:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.GaussianNB.html)

</td>
</tr>
<tr>
<td>

[GaussianProcessClassifier](classes/GaussianProcessClassifier.md)

</td>
<td>

Gaussian process classification (GPC) based on Laplace approximation.

The implementation is based on Algorithm 3.1, 3.2, and 5.1 from [\[RW2006\]](https://scikit-learn.org/stable/modules/generated/#r2da648a61a73-rw2006).

Internally, the Laplace approximation is used for approximating the non-Gaussian posterior by a Gaussian.

Currently, the implementation is restricted to using the logistic link function. For multi-class classification, several binary one-versus rest classifiers are fitted. Note that this class thus does not implement a true multi-class Laplace approximation.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../gaussian_process.html#gaussian-process).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.GaussianProcessClassifier.html)

</td>
</tr>
<tr>
<td>

[GaussianProcessRegressor](classes/GaussianProcessRegressor.md)

</td>
<td>

Gaussian process regression (GPR).

The implementation is based on Algorithm 2.1 of [\[RW2006\]](https://scikit-learn.org/stable/modules/generated/#rf75674b0f418-rw2006).

In addition to standard scikit-learn estimator API, [`GaussianProcessRegressor`](https://scikit-learn.org/stable/modules/generated/#sklearn.gaussian_process.GaussianProcessRegressor "sklearn.gaussian_process.GaussianProcessRegressor"):

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.GaussianProcessRegressor.html)

</td>
</tr>
<tr>
<td>

[GaussianRandomProjection](classes/GaussianRandomProjection.md)

</td>
<td>

Reduce dimensionality through Gaussian random projection.

The components of the random matrix are drawn from N(0, 1 / n_components).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../random_projection.html#gaussian-random-matrix).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.random_projection.GaussianRandomProjection.html)

</td>
</tr>
<tr>
<td>

[GenericUnivariateSelect](classes/GenericUnivariateSelect.md)

</td>
<td>

Univariate feature selector with configurable strategy.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../feature_selection.html#univariate-feature-selection).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.GenericUnivariateSelect.html)

</td>
</tr>
<tr>
<td>

[GradientBoostingClassifier](classes/GradientBoostingClassifier.md)

</td>
<td>

Gradient Boosting for classification.

This algorithm builds an additive model in a forward stage-wise fashion; it allows for the optimization of arbitrary differentiable loss functions. In each stage `n_classes_` regression trees are fit on the negative gradient of the loss function, e.g. binary or multiclass log loss. Binary classification is a special case where only a single regression tree is induced.

[`HistGradientBoostingClassifier`](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.HistGradientBoostingClassifier.html#sklearn.ensemble.HistGradientBoostingClassifier "sklearn.ensemble.HistGradientBoostingClassifier") is a much faster variant of this algorithm for intermediate and large datasets (`n_samples >= 10_000`) and supports monotonic constraints.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../ensemble.html#gradient-boosting).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.GradientBoostingClassifier.html)

</td>
</tr>
<tr>
<td>

[GradientBoostingRegressor](classes/GradientBoostingRegressor.md)

</td>
<td>

Gradient Boosting for regression.

This estimator builds an additive model in a forward stage-wise fashion; it allows for the optimization of arbitrary differentiable loss functions. In each stage a regression tree is fit on the negative gradient of the given loss function.

[`HistGradientBoostingRegressor`](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.HistGradientBoostingRegressor.html#sklearn.ensemble.HistGradientBoostingRegressor "sklearn.ensemble.HistGradientBoostingRegressor") is a much faster variant of this algorithm for intermediate and large datasets (`n_samples >= 10_000`) and supports monotonic constraints.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../ensemble.html#gradient-boosting).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.GradientBoostingRegressor.html)

</td>
</tr>
<tr>
<td>

[GraphicalLasso](classes/GraphicalLasso.md)

</td>
<td>

Sparse inverse covariance estimation with an l1-penalized estimator.

For a usage example see [Visualizing the stock market structure](https://scikit-learn.org/stable/modules/generated/../../auto_examples/applications/plot_stock_market.html#sphx-glr-auto-examples-applications-plot-stock-market-py).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../covariance.html#sparse-inverse-covariance).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.GraphicalLasso.html)

</td>
</tr>
<tr>
<td>

[GraphicalLassoCV](classes/GraphicalLassoCV.md)

</td>
<td>

Sparse inverse covariance w/ cross-validated choice of the l1 penalty.

See glossary entry for [cross-validation estimator](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-cross-validation-estimator).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../covariance.html#sparse-inverse-covariance).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.GraphicalLassoCV.html)

</td>
</tr>
<tr>
<td>

[GridSearchCV](classes/GridSearchCV.md)

</td>
<td>

Exhaustive search over specified parameter values for an estimator.

Important members are fit, predict.

GridSearchCV implements a “fit” and a “score” method. It also implements “score_samples”, “predict”, “predict_proba”, “decision_function”, “transform” and “inverse_transform” if they are implemented in the estimator used.

The parameters of the estimator used to apply these methods are optimized by cross-validated grid-search over a parameter grid.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../grid_search.html#grid-search).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GridSearchCV.html)

</td>
</tr>
<tr>
<td>

[GroupKFold](classes/GroupKFold.md)

</td>
<td>

K-fold iterator variant with non-overlapping groups.

Each group will appear exactly once in the test set across all folds (the number of distinct groups has to be at least equal to the number of folds).

The folds are approximately balanced in the sense that the number of samples is approximately the same in each test fold.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../cross_validation.html#group-k-fold).

For visualisation of cross-validation behaviour and comparison between common scikit-learn split methods refer to [Visualizing cross-validation behavior in scikit-learn](https://scikit-learn.org/stable/modules/generated/../../auto_examples/model_selection/plot_cv_indices.html#sphx-glr-auto-examples-model-selection-plot-cv-indices-py)

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GroupKFold.html)

</td>
</tr>
<tr>
<td>

[GroupShuffleSplit](classes/GroupShuffleSplit.md)

</td>
<td>

Shuffle-Group(s)-Out cross-validation iterator.

Provides randomized train/test indices to split data according to a third-party provided group. This group information can be used to encode arbitrary domain specific stratifications of the samples as integers.

For instance the groups could be the year of collection of the samples and thus allow for cross-validation against time-based splits.

The difference between [`LeavePGroupsOut`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.LeavePGroupsOut.html#sklearn.model_selection.LeavePGroupsOut "sklearn.model_selection.LeavePGroupsOut") and `GroupShuffleSplit` is that the former generates splits using all subsets of size `p` unique groups, whereas `GroupShuffleSplit` generates a user-determined number of random test splits, each with a user-determined fraction of unique groups.

For example, a less computationally intensive alternative to `LeavePGroupsOut(p=10)` would be `GroupShuffleSplit(test_size=10, n_splits=100)`.

Contrary to other cross-validation strategies, the random splits do not guarantee that test sets across all folds will be mutually exclusive, and might include overlapping samples. However, this is still very likely for sizeable datasets.

Note: The parameters `test_size` and `train_size` refer to groups, and not to samples as in [`ShuffleSplit`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.ShuffleSplit.html#sklearn.model_selection.ShuffleSplit "sklearn.model_selection.ShuffleSplit").

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../cross_validation.html#group-shuffle-split).

For visualisation of cross-validation behaviour and comparison between common scikit-learn split methods refer to [Visualizing cross-validation behavior in scikit-learn](https://scikit-learn.org/stable/modules/generated/../../auto_examples/model_selection/plot_cv_indices.html#sphx-glr-auto-examples-model-selection-plot-cv-indices-py)

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GroupShuffleSplit.html)

</td>
</tr>
<tr>
<td>

[HalvingGridSearchCV](classes/HalvingGridSearchCV.md)

</td>
<td>

Search over specified parameter values with successive halving.

The search strategy starts evaluating all the candidates with a small amount of resources and iteratively selects the best candidates, using more and more resources.

Read more in the [User guide](https://scikit-learn.org/stable/modules/generated/../grid_search.html#successive-halving-user-guide).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.HalvingGridSearchCV.html)

</td>
</tr>
<tr>
<td>

[HalvingRandomSearchCV](classes/HalvingRandomSearchCV.md)

</td>
<td>

Randomized search on hyper parameters.

The search strategy starts evaluating all the candidates with a small amount of resources and iteratively selects the best candidates, using more and more resources.

The candidates are sampled at random from the parameter space and the number of sampled candidates is determined by `n_candidates`.

Read more in the [User guide](https://scikit-learn.org/stable/modules/generated/../grid_search.html#successive-halving-user-guide).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.HalvingRandomSearchCV.html)

</td>
</tr>
<tr>
<td>

[HashingVectorizer](classes/HashingVectorizer.md)

</td>
<td>

Convert a collection of text documents to a matrix of token occurrences.

It turns a collection of text documents into a scipy.sparse matrix holding token occurrence counts (or binary occurrence information), possibly normalized as token frequencies if norm=’l1’ or projected on the euclidean unit sphere if norm=’l2’.

This text vectorizer implementation uses the hashing trick to find the token string name to feature integer index mapping.

This strategy has several advantages:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.HashingVectorizer.html)

</td>
</tr>
<tr>
<td>

[HDBSCAN](classes/HDBSCAN.md)

</td>
<td>

Cluster data using hierarchical density-based clustering.

HDBSCAN - Hierarchical Density-Based Spatial Clustering of Applications with Noise. Performs [`DBSCAN`](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.DBSCAN.html#sklearn.cluster.DBSCAN "sklearn.cluster.DBSCAN") over varying epsilon values and integrates the result to find a clustering that gives the best stability over epsilon. This allows HDBSCAN to find clusters of varying densities (unlike [`DBSCAN`](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.DBSCAN.html#sklearn.cluster.DBSCAN "sklearn.cluster.DBSCAN")), and be more robust to parameter selection. Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../clustering.html#hdbscan).

For an example of how to use HDBSCAN, as well as a comparison to [`DBSCAN`](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.DBSCAN.html#sklearn.cluster.DBSCAN "sklearn.cluster.DBSCAN"), please see the [plotting demo](https://scikit-learn.org/stable/modules/generated/../../auto_examples/cluster/plot_hdbscan.html#sphx-glr-auto-examples-cluster-plot-hdbscan-py).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.HDBSCAN.html)

</td>
</tr>
<tr>
<td>

[HistGradientBoostingClassifier](classes/HistGradientBoostingClassifier.md)

</td>
<td>

Histogram-based Gradient Boosting Classification Tree.

This estimator is much faster than [`GradientBoostingClassifier`](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.GradientBoostingClassifier.html#sklearn.ensemble.GradientBoostingClassifier "sklearn.ensemble.GradientBoostingClassifier") for big datasets (n_samples >= 10 000).

This estimator has native support for missing values (NaNs). During training, the tree grower learns at each split point whether samples with missing values should go to the left or right child, based on the potential gain. When predicting, samples with missing values are assigned to the left or right child consequently. If no missing values were encountered for a given feature during training, then samples with missing values are mapped to whichever child has the most samples.

This implementation is inspired by [LightGBM](https://github.com/Microsoft/LightGBM).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../ensemble.html#histogram-based-gradient-boosting).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.HistGradientBoostingClassifier.html)

</td>
</tr>
<tr>
<td>

[HistGradientBoostingRegressor](classes/HistGradientBoostingRegressor.md)

</td>
<td>

Histogram-based Gradient Boosting Regression Tree.

This estimator is much faster than [`GradientBoostingRegressor`](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.GradientBoostingRegressor.html#sklearn.ensemble.GradientBoostingRegressor "sklearn.ensemble.GradientBoostingRegressor") for big datasets (n_samples >= 10 000).

This estimator has native support for missing values (NaNs). During training, the tree grower learns at each split point whether samples with missing values should go to the left or right child, based on the potential gain. When predicting, samples with missing values are assigned to the left or right child consequently. If no missing values were encountered for a given feature during training, then samples with missing values are mapped to whichever child has the most samples. See [Features in Histogram Gradient Boosting Trees](https://scikit-learn.org/stable/modules/generated/../../auto_examples/ensemble/plot_hgbt_regression.html#sphx-glr-auto-examples-ensemble-plot-hgbt-regression-py) for a usecase example of this feature.

This implementation is inspired by [LightGBM](https://github.com/Microsoft/LightGBM).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../ensemble.html#histogram-based-gradient-boosting).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.HistGradientBoostingRegressor.html)

</td>
</tr>
<tr>
<td>

[HuberRegressor](classes/HuberRegressor.md)

</td>
<td>

L2-regularized linear regression model that is robust to outliers.

The Huber Regressor optimizes the squared loss for the samples where `|(y \- Xw \- c) / sigma| < epsilon` and the absolute loss for the samples where `|(y \- Xw \- c) / sigma| > epsilon`, where the model coefficients `w`, the intercept `c` and the scale `sigma` are parameters to be optimized. The parameter sigma makes sure that if y is scaled up or down by a certain factor, one does not need to rescale epsilon to achieve the same robustness. Note that this does not take into account the fact that the different features of X may be of different scales.

The Huber loss function has the advantage of not being heavily influenced by the outliers while not completely ignoring their effect.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#huber-regression)

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.HuberRegressor.html)

</td>
</tr>
<tr>
<td>

[Hyperparameter](classes/Hyperparameter.md)

</td>
<td>

A kernel hyperparameter’s specification in form of a namedtuple.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.Hyperparameter.html)

</td>
</tr>
<tr>
<td>

[IncrementalPCA](classes/IncrementalPCA.md)

</td>
<td>

Incremental principal components analysis (IPCA).

Linear dimensionality reduction using Singular Value Decomposition of the data, keeping only the most significant singular vectors to project the data to a lower dimensional space. The input data is centered but not scaled for each feature before applying the SVD.

Depending on the size of the input data, this algorithm can be much more memory efficient than a PCA, and allows sparse input.

This algorithm has constant memory complexity, on the order of `batch_size \* n_features`, enabling use of np.memmap files without loading the entire file into memory. For sparse matrices, the input is converted to dense in batches (in order to be able to subtract the mean) which avoids storing the entire dense matrix at any one time.

The computational overhead of each SVD is `O(batch_size \* n_features \*\* 2)`, but only 2 \* batch_size samples remain in memory at a time. There will be `n_samples / batch_size` SVD computations to get the principal components, versus 1 large SVD of complexity `O(n_samples \* n_features \*\* 2)` for PCA.

For a usage example, see [Incremental PCA](https://scikit-learn.org/stable/modules/generated/../../auto_examples/decomposition/plot_incremental_pca.html#sphx-glr-auto-examples-decomposition-plot-incremental-pca-py).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../decomposition.html#incrementalpca).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.IncrementalPCA.html)

</td>
</tr>
<tr>
<td>

[IsolationForest](classes/IsolationForest.md)

</td>
<td>

Isolation Forest Algorithm.

Return the anomaly score of each sample using the IsolationForest algorithm

The IsolationForest ‘isolates’ observations by randomly selecting a feature and then randomly selecting a split value between the maximum and minimum values of the selected feature.

Since recursive partitioning can be represented by a tree structure, the number of splittings required to isolate a sample is equivalent to the path length from the root node to the terminating node.

This path length, averaged over a forest of such random trees, is a measure of normality and our decision function.

Random partitioning produces noticeably shorter paths for anomalies. Hence, when a forest of random trees collectively produce shorter path lengths for particular samples, they are highly likely to be anomalies.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../outlier_detection.html#isolation-forest).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.IsolationForest.html)

</td>
</tr>
<tr>
<td>

[Isomap](classes/Isomap.md)

</td>
<td>

Isomap Embedding.

Non-linear dimensionality reduction through Isometric Mapping

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../manifold.html#isomap).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.Isomap.html)

</td>
</tr>
<tr>
<td>

[IsotonicRegression](classes/IsotonicRegression.md)

</td>
<td>

Isotonic regression model.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../isotonic.html#isotonic).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.isotonic.IsotonicRegression.html)

</td>
</tr>
<tr>
<td>

[IterativeImputer](classes/IterativeImputer.md)

</td>
<td>

Multivariate imputer that estimates each feature from all the others.

A strategy for imputing missing values by modeling each feature with missing values as a function of other features in a round-robin fashion.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../impute.html#iterative-imputer).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.impute.IterativeImputer.html)

</td>
</tr>
<tr>
<td>

[KBinsDiscretizer](classes/KBinsDiscretizer.md)

</td>
<td>

Bin continuous data into intervals.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../preprocessing.html#preprocessing-discretization).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.KBinsDiscretizer.html)

</td>
</tr>
<tr>
<td>

[KDTree](classes/KDTree.md)

</td>
<td>

KDTree for fast generalized N-point problems

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../neighbors.html#unsupervised-neighbors).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KDTree.html)

</td>
</tr>
<tr>
<td>

[Kernel](classes/Kernel.md)

</td>
<td>

Base class for all kernels.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.Kernel.html)

</td>
</tr>
<tr>
<td>

[KernelCenterer](classes/KernelCenterer.md)

</td>
<td>

Center an arbitrary kernel matrix \\(K\\).

Let define a kernel \\(K\\) such that:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.KernelCenterer.html)

</td>
</tr>
<tr>
<td>

[KernelDensity](classes/KernelDensity.md)

</td>
<td>

Kernel Density Estimation.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../density.html#kernel-density).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KernelDensity.html)

</td>
</tr>
<tr>
<td>

[KernelPCA](classes/KernelPCA.md)

</td>
<td>

Kernel Principal component analysis (KPCA).

Non-linear dimensionality reduction through the use of kernels [\[1\]](https://scikit-learn.org/stable/modules/generated/#r396fc7d924b8-1), see also [Pairwise metrics, Affinities and Kernels](https://scikit-learn.org/stable/modules/generated/../metrics.html#metrics).

It uses the [`scipy.linalg.eigh`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.linalg.eigh.html#scipy.linalg.eigh "(in SciPy v1.14.1)") LAPACK implementation of the full SVD or the [`scipy.sparse.linalg.eigsh`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.sparse.linalg.eigsh.html#scipy.sparse.linalg.eigsh "(in SciPy v1.14.1)") ARPACK implementation of the truncated SVD, depending on the shape of the input data and the number of components to extract. It can also use a randomized truncated SVD by the method proposed in [\[3\]](https://scikit-learn.org/stable/modules/generated/#r396fc7d924b8-3), see `eigen_solver`.

For a usage example and comparison between Principal Components Analysis (PCA) and its kernelized version (KPCA), see [Kernel PCA](https://scikit-learn.org/stable/modules/generated/../../auto_examples/decomposition/plot_kernel_pca.html#sphx-glr-auto-examples-decomposition-plot-kernel-pca-py).

For a usage example in denoising images using KPCA, see [Image denoising using kernel PCA](https://scikit-learn.org/stable/modules/generated/../../auto_examples/applications/plot_digits_denoising.html#sphx-glr-auto-examples-applications-plot-digits-denoising-py).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../decomposition.html#kernel-pca).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.KernelPCA.html)

</td>
</tr>
<tr>
<td>

[KernelRidge](classes/KernelRidge.md)

</td>
<td>

Kernel ridge regression.

Kernel ridge regression (KRR) combines ridge regression (linear least squares with l2-norm regularization) with the kernel trick. It thus learns a linear function in the space induced by the respective kernel and the data. For non-linear kernels, this corresponds to a non-linear function in the original space.

The form of the model learned by KRR is identical to support vector regression (SVR). However, different loss functions are used: KRR uses squared error loss while support vector regression uses epsilon-insensitive loss, both combined with l2 regularization. In contrast to SVR, fitting a KRR model can be done in closed-form and is typically faster for medium-sized datasets. On the other hand, the learned model is non-sparse and thus slower than SVR, which learns a sparse model for epsilon > 0, at prediction-time.

This estimator has built-in support for multi-variate regression (i.e., when y is a 2d-array of shape \[n_samples, n_targets\]).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../kernel_ridge.html#kernel-ridge).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.kernel_ridge.KernelRidge.html)

</td>
</tr>
<tr>
<td>

[KFold](classes/KFold.md)

</td>
<td>

K-Fold cross-validator.

Provides train/test indices to split data in train/test sets. Split dataset into k consecutive folds (without shuffling by default).

Each fold is then used once as a validation while the k - 1 remaining folds form the training set.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../cross_validation.html#k-fold).

For visualisation of cross-validation behaviour and comparison between common scikit-learn split methods refer to [Visualizing cross-validation behavior in scikit-learn](https://scikit-learn.org/stable/modules/generated/../../auto_examples/model_selection/plot_cv_indices.html#sphx-glr-auto-examples-model-selection-plot-cv-indices-py)

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.KFold.html)

</td>
</tr>
<tr>
<td>

[KMeans](classes/KMeans.md)

</td>
<td>

K-Means clustering.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../clustering.html#k-means).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html)

</td>
</tr>
<tr>
<td>

[KNeighborsClassifier](classes/KNeighborsClassifier.md)

</td>
<td>

Classifier implementing the k-nearest neighbors vote.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../neighbors.html#classification).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsClassifier.html)

</td>
</tr>
<tr>
<td>

[KNeighborsRegressor](classes/KNeighborsRegressor.md)

</td>
<td>

Regression based on k-nearest neighbors.

The target is predicted by local interpolation of the targets associated of the nearest neighbors in the training set.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../neighbors.html#regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsRegressor.html)

</td>
</tr>
<tr>
<td>

[KNeighborsTransformer](classes/KNeighborsTransformer.md)

</td>
<td>

Transform X into a (weighted) graph of k nearest neighbors.

The transformed data is a sparse graph as returned by kneighbors_graph.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../neighbors.html#neighbors-transformer).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsTransformer.html)

</td>
</tr>
<tr>
<td>

[KNNImputer](classes/KNNImputer.md)

</td>
<td>

Imputation for completing missing values using k-Nearest Neighbors.

Each sample’s missing values are imputed using the mean value from `n_neighbors` nearest neighbors found in the training set. Two samples are close if the features that neither is missing are close.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../impute.html#knnimpute).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.impute.KNNImputer.html)

</td>
</tr>
<tr>
<td>

[LabelBinarizer](classes/LabelBinarizer.md)

</td>
<td>

Binarize labels in a one-vs-all fashion.

Several regression and binary classification algorithms are available in scikit-learn. A simple way to extend these algorithms to the multi-class classification case is to use the so-called one-vs-all scheme.

At learning time, this simply consists in learning one regressor or binary classifier per class. In doing so, one needs to convert multi-class labels to binary labels (belong or does not belong to the class). `LabelBinarizer` makes this process easy with the transform method.

At prediction time, one assigns the class for which the corresponding model gave the greatest confidence. `LabelBinarizer` makes this easy with the [`inverse_transform`](https://scikit-learn.org/stable/modules/generated/#sklearn.preprocessing.LabelBinarizer.inverse_transform "sklearn.preprocessing.LabelBinarizer.inverse_transform") method.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../preprocessing_targets.html#preprocessing-targets).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.LabelBinarizer.html)

</td>
</tr>
<tr>
<td>

[LabelEncoder](classes/LabelEncoder.md)

</td>
<td>

Encode target labels with value between 0 and n_classes-1.

This transformer should be used to encode target values, *i.e.* `y`, and not the input `X`.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../preprocessing_targets.html#preprocessing-targets).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.LabelEncoder.html)

</td>
</tr>
<tr>
<td>

[LabelPropagation](classes/LabelPropagation.md)

</td>
<td>

Label Propagation classifier.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../semi_supervised.html#label-propagation).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.semi_supervised.LabelPropagation.html)

</td>
</tr>
<tr>
<td>

[LabelSpreading](classes/LabelSpreading.md)

</td>
<td>

LabelSpreading model for semi-supervised learning.

This model is similar to the basic Label Propagation algorithm, but uses affinity matrix based on the normalized graph Laplacian and soft clamping across the labels.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../semi_supervised.html#label-propagation).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.semi_supervised.LabelSpreading.html)

</td>
</tr>
<tr>
<td>

[Lars](classes/Lars.md)

</td>
<td>

Least Angle Regression model a.k.a. LAR.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#least-angle-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Lars.html)

</td>
</tr>
<tr>
<td>

[LarsCV](classes/LarsCV.md)

</td>
<td>

Cross-validated Least Angle Regression model.

See glossary entry for [cross-validation estimator](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-cross-validation-estimator).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#least-angle-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LarsCV.html)

</td>
</tr>
<tr>
<td>

[Lasso](classes/Lasso.md)

</td>
<td>

Linear Model trained with L1 prior as regularizer (aka the Lasso).

The optimization objective for Lasso is:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Lasso.html)

</td>
</tr>
<tr>
<td>

[LassoCV](classes/LassoCV.md)

</td>
<td>

Lasso linear model with iterative fitting along a regularization path.

See glossary entry for [cross-validation estimator](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-cross-validation-estimator).

The best model is selected by cross-validation.

The optimization objective for Lasso is:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LassoCV.html)

</td>
</tr>
<tr>
<td>

[LassoLars](classes/LassoLars.md)

</td>
<td>

Lasso model fit with Least Angle Regression a.k.a. Lars.

It is a Linear Model trained with an L1 prior as regularizer.

The optimization objective for Lasso is:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LassoLars.html)

</td>
</tr>
<tr>
<td>

[LassoLarsCV](classes/LassoLarsCV.md)

</td>
<td>

Cross-validated Lasso, using the LARS algorithm.

See glossary entry for [cross-validation estimator](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-cross-validation-estimator).

The optimization objective for Lasso is:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LassoLarsCV.html)

</td>
</tr>
<tr>
<td>

[LassoLarsIC](classes/LassoLarsIC.md)

</td>
<td>

Lasso model fit with Lars using BIC or AIC for model selection.

The optimization objective for Lasso is:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LassoLarsIC.html)

</td>
</tr>
<tr>
<td>

[LatentDirichletAllocation](classes/LatentDirichletAllocation.md)

</td>
<td>

Latent Dirichlet Allocation with online variational Bayes algorithm.

The implementation is based on [\[1\]](https://scikit-learn.org/stable/modules/generated/#re25e5648fc37-1) and [\[2\]](https://scikit-learn.org/stable/modules/generated/#re25e5648fc37-2).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.LatentDirichletAllocation.html)

</td>
</tr>
<tr>
<td>

[LearningCurveDisplay](classes/LearningCurveDisplay.md)

</td>
<td>

Learning Curve visualization.

It is recommended to use [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.model_selection.LearningCurveDisplay.from_estimator "sklearn.model_selection.LearningCurveDisplay.from_estimator") to create a [`LearningCurveDisplay`](https://scikit-learn.org/stable/modules/generated/#sklearn.model_selection.LearningCurveDisplay "sklearn.model_selection.LearningCurveDisplay") instance. All parameters are stored as attributes.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations) for general information about the visualization API and [detailed documentation](https://scikit-learn.org/stable/modules/generated/../learning_curve.html#learning-curve) regarding the learning curve visualization.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.LearningCurveDisplay.html)

</td>
</tr>
<tr>
<td>

[LeaveOneGroupOut](classes/LeaveOneGroupOut.md)

</td>
<td>

Leave One Group Out cross-validator.

Provides train/test indices to split data such that each training set is comprised of all samples except ones belonging to one specific group. Arbitrary domain specific group information is provided as an array of integers that encodes the group of each sample.

For instance the groups could be the year of collection of the samples and thus allow for cross-validation against time-based splits.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../cross_validation.html#leave-one-group-out).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.LeaveOneGroupOut.html)

</td>
</tr>
<tr>
<td>

[LeaveOneOut](classes/LeaveOneOut.md)

</td>
<td>

Leave-One-Out cross-validator.

Provides train/test indices to split data in train/test sets. Each sample is used once as a test set (singleton) while the remaining samples form the training set.

Note: `LeaveOneOut()` is equivalent to `KFold(n_splits=n)` and `LeavePOut(p=1)` where `n` is the number of samples.

Due to the high number of test sets (which is the same as the number of samples) this cross-validation method can be very costly. For large datasets one should favor [`KFold`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.KFold.html#sklearn.model_selection.KFold "sklearn.model_selection.KFold"), [`ShuffleSplit`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.ShuffleSplit.html#sklearn.model_selection.ShuffleSplit "sklearn.model_selection.ShuffleSplit") or [`StratifiedKFold`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.StratifiedKFold.html#sklearn.model_selection.StratifiedKFold "sklearn.model_selection.StratifiedKFold").

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../cross_validation.html#leave-one-out).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.LeaveOneOut.html)

</td>
</tr>
<tr>
<td>

[LeavePGroupsOut](classes/LeavePGroupsOut.md)

</td>
<td>

Leave P Group(s) Out cross-validator.

Provides train/test indices to split data according to a third-party provided group. This group information can be used to encode arbitrary domain specific stratifications of the samples as integers.

For instance the groups could be the year of collection of the samples and thus allow for cross-validation against time-based splits.

The difference between LeavePGroupsOut and LeaveOneGroupOut is that the former builds the test sets with all the samples assigned to `p` different values of the groups while the latter uses samples all assigned the same groups.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../cross_validation.html#leave-p-groups-out).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.LeavePGroupsOut.html)

</td>
</tr>
<tr>
<td>

[LeavePOut](classes/LeavePOut.md)

</td>
<td>

Leave-P-Out cross-validator.

Provides train/test indices to split data in train/test sets. This results in testing on all distinct samples of size p, while the remaining n - p samples form the training set in each iteration.

Note: `LeavePOut(p)` is NOT equivalent to `KFold(n_splits=n_samples // p)` which creates non-overlapping test sets.

Due to the high number of iterations which grows combinatorically with the number of samples this cross-validation method can be very costly. For large datasets one should favor [`KFold`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.KFold.html#sklearn.model_selection.KFold "sklearn.model_selection.KFold"), [`StratifiedKFold`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.StratifiedKFold.html#sklearn.model_selection.StratifiedKFold "sklearn.model_selection.StratifiedKFold") or [`ShuffleSplit`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.ShuffleSplit.html#sklearn.model_selection.ShuffleSplit "sklearn.model_selection.ShuffleSplit").

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../cross_validation.html#leave-p-out).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.LeavePOut.html)

</td>
</tr>
<tr>
<td>

[LedoitWolf](classes/LedoitWolf.md)

</td>
<td>

LedoitWolf Estimator.

Ledoit-Wolf is a particular form of shrinkage, where the shrinkage coefficient is computed using O. Ledoit and M. Wolf’s formula as described in “A Well-Conditioned Estimator for Large-Dimensional Covariance Matrices”, Ledoit and Wolf, Journal of Multivariate Analysis, Volume 88, Issue 2, February 2004, pages 365-411.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../covariance.html#shrunk-covariance).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.LedoitWolf.html)

</td>
</tr>
<tr>
<td>

[LinearDiscriminantAnalysis](classes/LinearDiscriminantAnalysis.md)

</td>
<td>

Linear Discriminant Analysis.

A classifier with a linear decision boundary, generated by fitting class conditional densities to the data and using Bayes’ rule.

The model fits a Gaussian density to each class, assuming that all classes share the same covariance matrix.

The fitted model can also be used to reduce the dimensionality of the input by projecting it to the most discriminative directions, using the `transform` method.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.discriminant_analysis.LinearDiscriminantAnalysis.html)

</td>
</tr>
<tr>
<td>

[LinearRegression](classes/LinearRegression.md)

</td>
<td>

Ordinary least squares Linear Regression.

LinearRegression fits a linear model with coefficients w = (w1, …, wp) to minimize the residual sum of squares between the observed targets in the dataset, and the targets predicted by the linear approximation.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html)

</td>
</tr>
<tr>
<td>

[LinearSVC](classes/LinearSVC.md)

</td>
<td>

Linear Support Vector Classification.

Similar to SVC with parameter kernel=’linear’, but implemented in terms of liblinear rather than libsvm, so it has more flexibility in the choice of penalties and loss functions and should scale better to large numbers of samples.

The main differences between [`LinearSVC`](https://scikit-learn.org/stable/modules/generated/#sklearn.svm.LinearSVC "sklearn.svm.LinearSVC") and [`SVC`](https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC.html#sklearn.svm.SVC "sklearn.svm.SVC") lie in the loss function used by default, and in the handling of intercept regularization between those two implementations.

This class supports both dense and sparse input and the multiclass support is handled according to a one-vs-the-rest scheme.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../svm.html#svm-classification).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.svm.LinearSVC.html)

</td>
</tr>
<tr>
<td>

[LinearSVR](classes/LinearSVR.md)

</td>
<td>

Linear Support Vector Regression.

Similar to SVR with parameter kernel=’linear’, but implemented in terms of liblinear rather than libsvm, so it has more flexibility in the choice of penalties and loss functions and should scale better to large numbers of samples.

The main differences between [`LinearSVR`](https://scikit-learn.org/stable/modules/generated/#sklearn.svm.LinearSVR "sklearn.svm.LinearSVR") and [`SVR`](https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVR.html#sklearn.svm.SVR "sklearn.svm.SVR") lie in the loss function used by default, and in the handling of intercept regularization between those two implementations.

This class supports both dense and sparse input.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../svm.html#svm-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.svm.LinearSVR.html)

</td>
</tr>
<tr>
<td>

[LocallyLinearEmbedding](classes/LocallyLinearEmbedding.md)

</td>
<td>

Locally Linear Embedding.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../manifold.html#locally-linear-embedding).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.LocallyLinearEmbedding.html)

</td>
</tr>
<tr>
<td>

[LocalOutlierFactor](classes/LocalOutlierFactor.md)

</td>
<td>

Unsupervised Outlier Detection using the Local Outlier Factor (LOF).

The anomaly score of each sample is called the Local Outlier Factor. It measures the local deviation of the density of a given sample with respect to its neighbors. It is local in that the anomaly score depends on how isolated the object is with respect to the surrounding neighborhood. More precisely, locality is given by k-nearest neighbors, whose distance is used to estimate the local density. By comparing the local density of a sample to the local densities of its neighbors, one can identify samples that have a substantially lower density than their neighbors. These are considered outliers.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.LocalOutlierFactor.html)

</td>
</tr>
<tr>
<td>

[LogisticRegression](classes/LogisticRegression.md)

</td>
<td>

Logistic Regression (aka logit, MaxEnt) classifier.

In the multiclass case, the training algorithm uses the one-vs-rest (OvR) scheme if the ‘multi_class’ option is set to ‘ovr’, and uses the cross-entropy loss if the ‘multi_class’ option is set to ‘multinomial’. (Currently the ‘multinomial’ option is supported only by the ‘lbfgs’, ‘sag’, ‘saga’ and ‘newton-cg’ solvers.)

This class implements regularized logistic regression using the ‘liblinear’ library, ‘newton-cg’, ‘sag’, ‘saga’ and ‘lbfgs’ solvers. **Note that regularization is applied by default**. It can handle both dense and sparse input. Use C-ordered arrays or CSR matrices containing 64-bit floats for optimal performance; any other input format will be converted (and copied).

The ‘newton-cg’, ‘sag’, and ‘lbfgs’ solvers support only L2 regularization with primal formulation, or no regularization. The ‘liblinear’ solver supports both L1 and L2 regularization, with a dual formulation only for the L2 penalty. The Elastic-Net regularization is only supported by the ‘saga’ solver.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#logistic-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html)

</td>
</tr>
<tr>
<td>

[LogisticRegressionCV](classes/LogisticRegressionCV.md)

</td>
<td>

Logistic Regression CV (aka logit, MaxEnt) classifier.

See glossary entry for [cross-validation estimator](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-cross-validation-estimator).

This class implements logistic regression using liblinear, newton-cg, sag or lbfgs optimizer. The newton-cg, sag and lbfgs solvers support only L2 regularization with primal formulation. The liblinear solver supports both L1 and L2 regularization, with a dual formulation only for the L2 penalty. Elastic-Net penalty is only supported by the saga solver.

For the grid of `Cs` values and `l1_ratios` values, the best hyperparameter is selected by the cross-validator [`StratifiedKFold`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.StratifiedKFold.html#sklearn.model_selection.StratifiedKFold "sklearn.model_selection.StratifiedKFold"), but it can be changed using the [cv](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-cv) parameter. The ‘newton-cg’, ‘sag’, ‘saga’ and ‘lbfgs’ solvers can warm-start the coefficients (see [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-warm_start)).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#logistic-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegressionCV.html)

</td>
</tr>
<tr>
<td>

[Matern](classes/Matern.md)

</td>
<td>

Matern kernel.

The class of Matern kernels is a generalization of the [`RBF`](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.RBF.html#sklearn.gaussian_process.kernels.RBF "sklearn.gaussian_process.kernels.RBF"). It has an additional parameter \\(\\nu\\) which controls the smoothness of the resulting function. The smaller \\(\\nu\\), the less smooth the approximated function is. As \\(\\nu\\rightarrow\\infty\\), the kernel becomes equivalent to the [`RBF`](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.RBF.html#sklearn.gaussian_process.kernels.RBF "sklearn.gaussian_process.kernels.RBF") kernel. When \\(\\nu = 1/2\\), the Matérn kernel becomes identical to the absolute exponential kernel. Important intermediate values are \\(\\nu=1.5\\) (once differentiable functions) and \\(\\nu=2.5\\) (twice differentiable functions).

The kernel is given by:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.Matern.html)

</td>
</tr>
<tr>
<td>

[MaxAbsScaler](classes/MaxAbsScaler.md)

</td>
<td>

Scale each feature by its maximum absolute value.

This estimator scales and translates each feature individually such that the maximal absolute value of each feature in the training set will be 1.0. It does not shift/center the data, and thus does not destroy any sparsity.

This scaler can also be applied to sparse CSR or CSC matrices.

`MaxAbsScaler` doesn’t reduce the effect of outliers; it only linearly scales them down. For an example visualization, refer to [Compare MaxAbsScaler with other scalers](https://scikit-learn.org/stable/modules/generated/../../auto_examples/preprocessing/plot_all_scaling.html#plot-all-scaling-max-abs-scaler-section).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.MaxAbsScaler.html)

</td>
</tr>
<tr>
<td>

[MDS](classes/MDS.md)

</td>
<td>

Multidimensional scaling.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../manifold.html#multidimensional-scaling).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.MDS.html)

</td>
</tr>
<tr>
<td>

[MeanShift](classes/MeanShift.md)

</td>
<td>

Mean shift clustering using a flat kernel.

Mean shift clustering aims to discover “blobs” in a smooth density of samples. It is a centroid-based algorithm, which works by updating candidates for centroids to be the mean of the points within a given region. These candidates are then filtered in a post-processing stage to eliminate near-duplicates to form the final set of centroids.

Seeding is performed using a binning technique for scalability.

For an example of how to use MeanShift clustering, refer to: [A demo of the mean-shift clustering algorithm](https://scikit-learn.org/stable/modules/generated/../../auto_examples/cluster/plot_mean_shift.html#sphx-glr-auto-examples-cluster-plot-mean-shift-py).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../clustering.html#mean-shift).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.MeanShift.html)

</td>
</tr>
<tr>
<td>

[MetadataRequest](classes/MetadataRequest.md)

</td>
<td>

Contains the metadata request info of a consumer.

Instances of `MethodMetadataRequest` are used in this class for each available method under `metadatarequest.{method}`.

Consumer-only classes such as simple estimators return a serialized version of this class as the output of `get_metadata_routing()`.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html)

</td>
</tr>
<tr>
<td>

[MetadataRouter](classes/MetadataRouter.md)

</td>
<td>

Stores and handles metadata routing for a router object.

This class is used by router objects to store and handle metadata routing. Routing information is stored as a dictionary of the form `{"object_name": RouteMappingPair(method_mapping, routing_info)}`, where `method_mapping` is an instance of [`MethodMapping`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MethodMapping.html#sklearn.utils.metadata_routing.MethodMapping "sklearn.utils.metadata_routing.MethodMapping") and `routing_info` is either a [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") or a [`MetadataRouter`](https://scikit-learn.org/stable/modules/generated/#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") instance.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRouter.html)

</td>
</tr>
<tr>
<td>

[MethodMapping](classes/MethodMapping.md)

</td>
<td>

Stores the mapping between caller and callee methods for a router.

This class is primarily used in a `get_metadata_routing()` of a router object when defining the mapping between the router’s methods and a sub-object (a sub-estimator or a scorer).

Iterating through an instance of this class yields `MethodPair(caller, callee)` instances.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MethodMapping.html)

</td>
</tr>
<tr>
<td>

[MinCovDet](classes/MinCovDet.md)

</td>
<td>

Minimum Covariance Determinant (MCD): robust estimator of covariance.

The Minimum Covariance Determinant covariance estimator is to be applied on Gaussian-distributed data, but could still be relevant on data drawn from a unimodal, symmetric distribution. It is not meant to be used with multi-modal data (the algorithm used to fit a MinCovDet object is likely to fail in such a case). One should consider projection pursuit methods to deal with multi-modal datasets.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../covariance.html#robust-covariance).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.MinCovDet.html)

</td>
</tr>
<tr>
<td>

[MiniBatchDictionaryLearning](classes/MiniBatchDictionaryLearning.md)

</td>
<td>

Mini-batch dictionary learning.

Finds a dictionary (a set of atoms) that performs well at sparsely encoding the fitted data.

Solves the optimization problem:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.MiniBatchDictionaryLearning.html)

</td>
</tr>
<tr>
<td>

[MiniBatchKMeans](classes/MiniBatchKMeans.md)

</td>
<td>

Mini-Batch K-Means clustering.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../clustering.html#mini-batch-kmeans).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.MiniBatchKMeans.html)

</td>
</tr>
<tr>
<td>

[MiniBatchNMF](classes/MiniBatchNMF.md)

</td>
<td>

Mini-Batch Non-Negative Matrix Factorization (NMF).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.MiniBatchNMF.html)

</td>
</tr>
<tr>
<td>

[MiniBatchSparsePCA](classes/MiniBatchSparsePCA.md)

</td>
<td>

Mini-batch Sparse Principal Components Analysis.

Finds the set of sparse components that can optimally reconstruct the data. The amount of sparseness is controllable by the coefficient of the L1 penalty, given by the parameter alpha.

For an example comparing sparse PCA to PCA, see [Faces dataset decompositions](https://scikit-learn.org/stable/modules/generated/../../auto_examples/decomposition/plot_faces_decomposition.html#sphx-glr-auto-examples-decomposition-plot-faces-decomposition-py)

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../decomposition.html#sparsepca).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.MiniBatchSparsePCA.html)

</td>
</tr>
<tr>
<td>

[MinMaxScaler](classes/MinMaxScaler.md)

</td>
<td>

Transform features by scaling each feature to a given range.

This estimator scales and translates each feature individually such that it is in the given range on the training set, e.g. between zero and one.

The transformation is given by:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.MinMaxScaler.html)

</td>
</tr>
<tr>
<td>

[MissingIndicator](classes/MissingIndicator.md)

</td>
<td>

Binary indicators for missing values.

Note that this component typically should not be used in a vanilla [`Pipeline`](https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") consisting of transformers and a classifier, but rather could be added using a [`FeatureUnion`](https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.FeatureUnion.html#sklearn.pipeline.FeatureUnion "sklearn.pipeline.FeatureUnion") or [`ColumnTransformer`](https://scikit-learn.org/stable/modules/generated/sklearn.compose.ColumnTransformer.html#sklearn.compose.ColumnTransformer "sklearn.compose.ColumnTransformer").

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../impute.html#impute).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.impute.MissingIndicator.html)

</td>
</tr>
<tr>
<td>

[MLPClassifier](classes/MLPClassifier.md)

</td>
<td>

Multi-layer Perceptron classifier.

This model optimizes the log-loss function using LBFGS or stochastic gradient descent.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.MLPClassifier.html)

</td>
</tr>
<tr>
<td>

[MLPRegressor](classes/MLPRegressor.md)

</td>
<td>

Multi-layer Perceptron regressor.

This model optimizes the squared error using LBFGS or stochastic gradient descent.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.MLPRegressor.html)

</td>
</tr>
<tr>
<td>

[MultiLabelBinarizer](classes/MultiLabelBinarizer.md)

</td>
<td>

Transform between iterable of iterables and a multilabel format.

Although a list of sets or tuples is a very intuitive format for multilabel data, it is unwieldy to process. This transformer converts between this intuitive format and the supported multilabel format: a (samples x classes) binary matrix indicating the presence of a class label.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.MultiLabelBinarizer.html)

</td>
</tr>
<tr>
<td>

[MultinomialNB](classes/MultinomialNB.md)

</td>
<td>

Naive Bayes classifier for multinomial models.

The multinomial Naive Bayes classifier is suitable for classification with discrete features (e.g., word counts for text classification). The multinomial distribution normally requires integer feature counts. However, in practice, fractional counts such as tf-idf may also work.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../naive_bayes.html#multinomial-naive-bayes).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.MultinomialNB.html)

</td>
</tr>
<tr>
<td>

[MultiOutputClassifier](classes/MultiOutputClassifier.md)

</td>
<td>

Multi target classification.

This strategy consists of fitting one classifier per target. This is a simple strategy for extending classifiers that do not natively support multi-target classification.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multioutput.MultiOutputClassifier.html)

</td>
</tr>
<tr>
<td>

[MultiOutputRegressor](classes/MultiOutputRegressor.md)

</td>
<td>

Multi target regression.

This strategy consists of fitting one regressor per target. This is a simple strategy for extending regressors that do not natively support multi-target regression.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multioutput.MultiOutputRegressor.html)

</td>
</tr>
<tr>
<td>

[MultiTaskElasticNet](classes/MultiTaskElasticNet.md)

</td>
<td>

Multi-task ElasticNet model trained with L1/L2 mixed-norm as regularizer.

The optimization objective for MultiTaskElasticNet is:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.MultiTaskElasticNet.html)

</td>
</tr>
<tr>
<td>

[MultiTaskElasticNetCV](classes/MultiTaskElasticNetCV.md)

</td>
<td>

Multi-task L1/L2 ElasticNet with built-in cross-validation.

See glossary entry for [cross-validation estimator](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-cross-validation-estimator).

The optimization objective for MultiTaskElasticNet is:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.MultiTaskElasticNetCV.html)

</td>
</tr>
<tr>
<td>

[MultiTaskLasso](classes/MultiTaskLasso.md)

</td>
<td>

Multi-task Lasso model trained with L1/L2 mixed-norm as regularizer.

The optimization objective for Lasso is:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.MultiTaskLasso.html)

</td>
</tr>
<tr>
<td>

[MultiTaskLassoCV](classes/MultiTaskLassoCV.md)

</td>
<td>

Multi-task Lasso model trained with L1/L2 mixed-norm as regularizer.

See glossary entry for [cross-validation estimator](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-cross-validation-estimator).

The optimization objective for MultiTaskLasso is:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.MultiTaskLassoCV.html)

</td>
</tr>
<tr>
<td>

[NearestCentroid](classes/NearestCentroid.md)

</td>
<td>

Nearest centroid classifier.

Each class is represented by its centroid, with test samples classified to the class with the nearest centroid.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../neighbors.html#nearest-centroid-classifier).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.NearestCentroid.html)

</td>
</tr>
<tr>
<td>

[NearestNeighbors](classes/NearestNeighbors.md)

</td>
<td>

Unsupervised learner for implementing neighbor searches.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../neighbors.html#unsupervised-neighbors).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.NearestNeighbors.html)

</td>
</tr>
<tr>
<td>

[NeighborhoodComponentsAnalysis](classes/NeighborhoodComponentsAnalysis.md)

</td>
<td>

Neighborhood Components Analysis.

Neighborhood Component Analysis (NCA) is a machine learning algorithm for metric learning. It learns a linear transformation in a supervised fashion to improve the classification accuracy of a stochastic nearest neighbors rule in the transformed space.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../neighbors.html#nca).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.NeighborhoodComponentsAnalysis.html)

</td>
</tr>
<tr>
<td>

[NMF](classes/NMF.md)

</td>
<td>

Non-Negative Matrix Factorization (NMF).

Find two non-negative matrices, i.e. matrices with all non-negative elements, (W, H) whose product approximates the non-negative matrix X. This factorization can be used for example for dimensionality reduction, source separation or topic extraction.

The objective function is:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.NMF.html)

</td>
</tr>
<tr>
<td>

[Normalizer](classes/Normalizer.md)

</td>
<td>

Normalize samples individually to unit norm.

Each sample (i.e. each row of the data matrix) with at least one non zero component is rescaled independently of other samples so that its norm (l1, l2 or inf) equals one.

This transformer is able to work both with dense numpy arrays and scipy.sparse matrix (use CSR format if you want to avoid the burden of a copy / conversion).

Scaling inputs to unit norms is a common operation for text classification or clustering for instance. For instance the dot product of two l2-normalized TF-IDF vectors is the cosine similarity of the vectors and is the base similarity metric for the Vector Space Model commonly used by the Information Retrieval community.

For an example visualization, refer to [Compare Normalizer with other scalers](https://scikit-learn.org/stable/modules/generated/../../auto_examples/preprocessing/plot_all_scaling.html#plot-all-scaling-normalizer-section).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../preprocessing.html#preprocessing-normalization).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.Normalizer.html)

</td>
</tr>
<tr>
<td>

[NuSVC](classes/NuSVC.md)

</td>
<td>

Nu-Support Vector Classification.

Similar to SVC but uses a parameter to control the number of support vectors.

The implementation is based on libsvm.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../svm.html#svm-classification).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.svm.NuSVC.html)

</td>
</tr>
<tr>
<td>

[NuSVR](classes/NuSVR.md)

</td>
<td>

Nu Support Vector Regression.

Similar to NuSVC, for regression, uses a parameter nu to control the number of support vectors. However, unlike NuSVC, where nu replaces C, here nu replaces the parameter epsilon of epsilon-SVR.

The implementation is based on libsvm.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../svm.html#svm-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.svm.NuSVR.html)

</td>
</tr>
<tr>
<td>

[Nystroem](classes/Nystroem.md)

</td>
<td>

Approximate a kernel map using a subset of the training data.

Constructs an approximate feature map for an arbitrary kernel using a subset of the data as basis.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../kernel_approximation.html#nystroem-kernel-approx).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.Nystroem.html)

</td>
</tr>
<tr>
<td>

[OAS](classes/OAS.md)

</td>
<td>

Oracle Approximating Shrinkage Estimator.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../covariance.html#shrunk-covariance).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.OAS.html)

</td>
</tr>
<tr>
<td>

[OneClassSVM](classes/OneClassSVM.md)

</td>
<td>

Unsupervised Outlier Detection.

Estimate the support of a high-dimensional distribution.

The implementation is based on libsvm.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../outlier_detection.html#outlier-detection).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.svm.OneClassSVM.html)

</td>
</tr>
<tr>
<td>

[OneHotEncoder](classes/OneHotEncoder.md)

</td>
<td>

Encode categorical features as a one-hot numeric array.

The input to this transformer should be an array-like of integers or strings, denoting the values taken on by categorical (discrete) features. The features are encoded using a one-hot (aka ‘one-of-K’ or ‘dummy’) encoding scheme. This creates a binary column for each category and returns a sparse matrix or dense array (depending on the `sparse_output` parameter).

By default, the encoder derives the categories based on the unique values in each feature. Alternatively, you can also specify the `categories` manually.

This encoding is needed for feeding categorical data to many scikit-learn estimators, notably linear models and SVMs with the standard kernels.

Note: a one-hot encoding of y labels should use a LabelBinarizer instead.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../preprocessing.html#preprocessing-categorical-features). For a comparison of different encoders, refer to: [Comparing Target Encoder with Other Encoders](https://scikit-learn.org/stable/modules/generated/../../auto_examples/preprocessing/plot_target_encoder.html#sphx-glr-auto-examples-preprocessing-plot-target-encoder-py).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.OneHotEncoder.html)

</td>
</tr>
<tr>
<td>

[OneVsOneClassifier](classes/OneVsOneClassifier.md)

</td>
<td>

One-vs-one multiclass strategy.

This strategy consists in fitting one classifier per class pair. At prediction time, the class which received the most votes is selected. Since it requires to fit `n_classes \* (n_classes \- 1) / 2` classifiers, this method is usually slower than one-vs-the-rest, due to its O(n_classes^2) complexity. However, this method may be advantageous for algorithms such as kernel algorithms which don’t scale well with `n_samples`. This is because each individual learning problem only involves a small subset of the data whereas, with one-vs-the-rest, the complete dataset is used `n_classes` times.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../multiclass.html#ovo-classification).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multiclass.OneVsOneClassifier.html)

</td>
</tr>
<tr>
<td>

[OneVsRestClassifier](classes/OneVsRestClassifier.md)

</td>
<td>

One-vs-the-rest (OvR) multiclass strategy.

Also known as one-vs-all, this strategy consists in fitting one classifier per class. For each classifier, the class is fitted against all the other classes. In addition to its computational efficiency (only `n_classes` classifiers are needed), one advantage of this approach is its interpretability. Since each class is represented by one and one classifier only, it is possible to gain knowledge about the class by inspecting its corresponding classifier. This is the most commonly used strategy for multiclass classification and is a fair default choice.

OneVsRestClassifier can also be used for multilabel classification. To use this feature, provide an indicator matrix for the target `y` when calling `.fit`. In other words, the target labels should be formatted as a 2D binary (0/1) matrix, where \[i, j\] == 1 indicates the presence of label j in sample i. This estimator uses the binary relevance method to perform multilabel classification, which involves training one binary classifier independently for each label.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../multiclass.html#ovr-classification).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multiclass.OneVsRestClassifier.html)

</td>
</tr>
<tr>
<td>

[OPTICS](classes/OPTICS.md)

</td>
<td>

Estimate clustering structure from vector array.

OPTICS (Ordering Points To Identify the Clustering Structure), closely related to DBSCAN, finds core sample of high density and expands clusters from them [\[1\]](https://scikit-learn.org/stable/modules/generated/#r2c55e37003fe-1). Unlike DBSCAN, keeps cluster hierarchy for a variable neighborhood radius. Better suited for usage on large datasets than the current sklearn implementation of DBSCAN.

Clusters are then extracted using a DBSCAN-like method (cluster_method = ‘dbscan’) or an automatic technique proposed in [\[1\]](https://scikit-learn.org/stable/modules/generated/#r2c55e37003fe-1) (cluster_method = ‘xi’).

This implementation deviates from the original OPTICS by first performing k-nearest-neighborhood searches on all points to identify core sizes, then computing only the distances to unprocessed points when constructing the cluster order. Note that we do not employ a heap to manage the expansion candidates, so the time complexity will be O(n^2).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../clustering.html#optics).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.OPTICS.html)

</td>
</tr>
<tr>
<td>

[OrdinalEncoder](classes/OrdinalEncoder.md)

</td>
<td>

Encode categorical features as an integer array.

The input to this transformer should be an array-like of integers or strings, denoting the values taken on by categorical (discrete) features. The features are converted to ordinal integers. This results in a single column of integers (0 to n_categories - 1) per feature.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../preprocessing.html#preprocessing-categorical-features). For a comparison of different encoders, refer to: [Comparing Target Encoder with Other Encoders](https://scikit-learn.org/stable/modules/generated/../../auto_examples/preprocessing/plot_target_encoder.html#sphx-glr-auto-examples-preprocessing-plot-target-encoder-py).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.OrdinalEncoder.html)

</td>
</tr>
<tr>
<td>

[OrthogonalMatchingPursuit](classes/OrthogonalMatchingPursuit.md)

</td>
<td>

Orthogonal Matching Pursuit model (OMP).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#omp).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.OrthogonalMatchingPursuit.html)

</td>
</tr>
<tr>
<td>

[OrthogonalMatchingPursuitCV](classes/OrthogonalMatchingPursuitCV.md)

</td>
<td>

Cross-validated Orthogonal Matching Pursuit model (OMP).

See glossary entry for [cross-validation estimator](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-cross-validation-estimator).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#omp).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.OrthogonalMatchingPursuitCV.html)

</td>
</tr>
<tr>
<td>

[OutputCodeClassifier](classes/OutputCodeClassifier.md)

</td>
<td>

(Error-Correcting) Output-Code multiclass strategy.

Output-code based strategies consist in representing each class with a binary code (an array of 0s and 1s). At fitting time, one binary classifier per bit in the code book is fitted. At prediction time, the classifiers are used to project new points in the class space and the class closest to the points is chosen. The main advantage of these strategies is that the number of classifiers used can be controlled by the user, either for compressing the model (0 < `code_size` < 1) or for making the model more robust to errors (`code_size` > 1). See the documentation for more details.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../multiclass.html#ecoc).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multiclass.OutputCodeClassifier.html)

</td>
</tr>
<tr>
<td>

[PairwiseKernel](classes/PairwiseKernel.md)

</td>
<td>

Wrapper for kernels in sklearn.metrics.pairwise.

A thin wrapper around the functionality of the kernels in sklearn.metrics.pairwise.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.PairwiseKernel.html)

</td>
</tr>
<tr>
<td>

[Parallel](classes/Parallel.md)

</td>
<td>

Tweak of [`joblib.Parallel`](https://joblib.readthedocs.io/en/latest/generated/joblib.Parallel.html#joblib.Parallel "(in joblib v1.5.dev0)") that propagates the scikit-learn configuration.

This subclass of [`joblib.Parallel`](https://joblib.readthedocs.io/en/latest/generated/joblib.Parallel.html#joblib.Parallel "(in joblib v1.5.dev0)") ensures that the active configuration (thread-local) of scikit-learn is propagated to the parallel workers for the duration of the execution of the parallel tasks.

The API does not change and you can refer to [`joblib.Parallel`](https://joblib.readthedocs.io/en/latest/generated/joblib.Parallel.html#joblib.Parallel "(in joblib v1.5.dev0)") documentation for more details.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.utils.parallel.Parallel.html)

</td>
</tr>
<tr>
<td>

[ParameterGrid](classes/ParameterGrid.md)

</td>
<td>

Grid of parameters with a discrete number of values for each.

Can be used to iterate over parameter value combinations with the Python built-in function iter. The order of the generated parameter combinations is deterministic.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../grid_search.html#grid-search).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.ParameterGrid.html)

</td>
</tr>
<tr>
<td>

[ParameterSampler](classes/ParameterSampler.md)

</td>
<td>

Generator on parameters sampled from given distributions.

Non-deterministic iterable over random candidate combinations for hyper- parameter search. If all parameters are presented as a list, sampling without replacement is performed. If at least one parameter is given as a distribution, sampling with replacement is used. It is highly recommended to use continuous distributions for continuous parameters.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../grid_search.html#grid-search).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.ParameterSampler.html)

</td>
</tr>
<tr>
<td>

[PartialDependenceDisplay](classes/PartialDependenceDisplay.md)

</td>
<td>

Partial Dependence Plot (PDP).

This can also display individual partial dependencies which are often referred to as: Individual Condition Expectation (ICE).

It is recommended to use [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.inspection.PartialDependenceDisplay.from_estimator "sklearn.inspection.PartialDependenceDisplay.from_estimator") to create a [`PartialDependenceDisplay`](https://scikit-learn.org/stable/modules/generated/#sklearn.inspection.PartialDependenceDisplay "sklearn.inspection.PartialDependenceDisplay"). All parameters are stored as attributes.

Read more in [Advanced Plotting With Partial Dependence](https://scikit-learn.org/stable/modules/generated/../../auto_examples/miscellaneous/plot_partial_dependence_visualization_api.html#sphx-glr-auto-examples-miscellaneous-plot-partial-dependence-visualization-api-py) and the [User Guide](https://scikit-learn.org/stable/modules/generated/../partial_dependence.html#partial-dependence).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.inspection.PartialDependenceDisplay.html)

</td>
</tr>
<tr>
<td>

[PassiveAggressiveClassifier](classes/PassiveAggressiveClassifier.md)

</td>
<td>

Passive Aggressive Classifier.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#passive-aggressive).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.PassiveAggressiveClassifier.html)

</td>
</tr>
<tr>
<td>

[PassiveAggressiveRegressor](classes/PassiveAggressiveRegressor.md)

</td>
<td>

Passive Aggressive Regressor.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#passive-aggressive).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.PassiveAggressiveRegressor.html)

</td>
</tr>
<tr>
<td>

[PatchExtractor](classes/PatchExtractor.md)

</td>
<td>

Extracts patches from a collection of images.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../feature_extraction.html#image-feature-extraction).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.image.PatchExtractor.html)

</td>
</tr>
<tr>
<td>

[PCA](classes/PCA.md)

</td>
<td>

Principal component analysis (PCA).

Linear dimensionality reduction using Singular Value Decomposition of the data to project it to a lower dimensional space. The input data is centered but not scaled for each feature before applying the SVD.

It uses the LAPACK implementation of the full SVD or a randomized truncated SVD by the method of Halko et al. 2009, depending on the shape of the input data and the number of components to extract.

With sparse inputs, the ARPACK implementation of the truncated SVD can be used (i.e. through [`scipy.sparse.linalg.svds`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.sparse.linalg.svds.html#scipy.sparse.linalg.svds "(in SciPy v1.14.1)")). Alternatively, one may consider [`TruncatedSVD`](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.TruncatedSVD.html#sklearn.decomposition.TruncatedSVD "sklearn.decomposition.TruncatedSVD") where the data are not centered.

Notice that this class only supports sparse inputs for some solvers such as “arpack” and “covariance_eigh”. See [`TruncatedSVD`](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.TruncatedSVD.html#sklearn.decomposition.TruncatedSVD "sklearn.decomposition.TruncatedSVD") for an alternative with sparse data.

For a usage example, see [PCA example with Iris Data-set](https://scikit-learn.org/stable/modules/generated/../../auto_examples/decomposition/plot_pca_iris.html#sphx-glr-auto-examples-decomposition-plot-pca-iris-py)

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../decomposition.html#pca).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html)

</td>
</tr>
<tr>
<td>

[Perceptron](classes/Perceptron.md)

</td>
<td>

Linear perceptron classifier.

The implementation is a wrapper around [`SGDClassifier`](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.SGDClassifier.html#sklearn.linear_model.SGDClassifier "sklearn.linear_model.SGDClassifier") by fixing the `loss` and `learning_rate` parameters as:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Perceptron.html)

</td>
</tr>
<tr>
<td>

[Pipeline](classes/Pipeline.md)

</td>
<td>

A sequence of data transformers with an optional final predictor.

`Pipeline` allows you to sequentially apply a list of transformers to preprocess the data and, if desired, conclude the sequence with a final [predictor](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predictor) for predictive modeling.

Intermediate steps of the pipeline must be ‘transforms’, that is, they must implement `fit` and `transform` methods. The final [estimator](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-estimator) only needs to implement `fit`. The transformers in the pipeline can be cached using `memory` argument.

The purpose of the pipeline is to assemble several steps that can be cross-validated together while setting different parameters. For this, it enables setting parameters of the various steps using their names and the parameter name separated by a `'__'`, as in the example below. A step’s estimator may be replaced entirely by setting the parameter with its name to another estimator, or a transformer removed by setting it to `'passthrough'` or `undefined`.

For an example use case of `Pipeline` combined with [`GridSearchCV`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GridSearchCV.html#sklearn.model_selection.GridSearchCV "sklearn.model_selection.GridSearchCV"), refer to [Selecting dimensionality reduction with Pipeline and GridSearchCV](https://scikit-learn.org/stable/modules/generated/../../auto_examples/compose/plot_compare_reduction.html#sphx-glr-auto-examples-compose-plot-compare-reduction-py). The example [Pipelining: chaining a PCA and a logistic regression](https://scikit-learn.org/stable/modules/generated/../../auto_examples/compose/plot_digits_pipe.html#sphx-glr-auto-examples-compose-plot-digits-pipe-py) shows how to grid search on a pipeline using `'__'` as a separator in the parameter names.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../compose.html#pipeline).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.Pipeline.html)

</td>
</tr>
<tr>
<td>

[PLSCanonical](classes/PLSCanonical.md)

</td>
<td>

Partial Least Squares transformer and regressor.

For a comparison between other cross decomposition algorithms, see [Compare cross decomposition methods](https://scikit-learn.org/stable/modules/generated/../../auto_examples/cross_decomposition/plot_compare_cross_decomposition.html#sphx-glr-auto-examples-cross-decomposition-plot-compare-cross-decomposition-py).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../cross_decomposition.html#cross-decomposition).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cross_decomposition.PLSCanonical.html)

</td>
</tr>
<tr>
<td>

[PLSRegression](classes/PLSRegression.md)

</td>
<td>

PLS regression.

PLSRegression is also known as PLS2 or PLS1, depending on the number of targets.

For a comparison between other cross decomposition algorithms, see [Compare cross decomposition methods](https://scikit-learn.org/stable/modules/generated/../../auto_examples/cross_decomposition/plot_compare_cross_decomposition.html#sphx-glr-auto-examples-cross-decomposition-plot-compare-cross-decomposition-py).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../cross_decomposition.html#cross-decomposition).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cross_decomposition.PLSRegression.html)

</td>
</tr>
<tr>
<td>

[PLSSVD](classes/PLSSVD.md)

</td>
<td>

Partial Least Square SVD.

This transformer simply performs a SVD on the cross-covariance matrix `X'Y`. It is able to project both the training data `X` and the targets `Y`. The training data `X` is projected on the left singular vectors, while the targets are projected on the right singular vectors.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../cross_decomposition.html#cross-decomposition).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cross_decomposition.PLSSVD.html)

</td>
</tr>
<tr>
<td>

[PoissonRegressor](classes/PoissonRegressor.md)

</td>
<td>

Generalized Linear Model with a Poisson distribution.

This regressor uses the ‘log’ link function.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#generalized-linear-models).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.PoissonRegressor.html)

</td>
</tr>
<tr>
<td>

[PolynomialCountSketch](classes/PolynomialCountSketch.md)

</td>
<td>

Polynomial kernel approximation via Tensor Sketch.

Implements Tensor Sketch, which approximates the feature map of the polynomial kernel:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.PolynomialCountSketch.html)

</td>
</tr>
<tr>
<td>

[PolynomialFeatures](classes/PolynomialFeatures.md)

</td>
<td>

Generate polynomial and interaction features.

Generate a new feature matrix consisting of all polynomial combinations of the features with degree less than or equal to the specified degree. For example, if an input sample is two dimensional and of the form \[a, b\], the degree-2 polynomial features are \[1, a, b, a^2, ab, b^2\].

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../preprocessing.html#polynomial-features).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.PolynomialFeatures.html)

</td>
</tr>
<tr>
<td>

[PowerTransformer](classes/PowerTransformer.md)

</td>
<td>

Apply a power transform featurewise to make data more Gaussian-like.

Power transforms are a family of parametric, monotonic transformations that are applied to make data more Gaussian-like. This is useful for modeling issues related to heteroscedasticity (non-constant variance), or other situations where normality is desired.

Currently, PowerTransformer supports the Box-Cox transform and the Yeo-Johnson transform. The optimal parameter for stabilizing variance and minimizing skewness is estimated through maximum likelihood.

Box-Cox requires input data to be strictly positive, while Yeo-Johnson supports both positive or negative data.

By default, zero-mean, unit-variance normalization is applied to the transformed data.

For an example visualization, refer to [Compare PowerTransformer with other scalers](https://scikit-learn.org/stable/modules/generated/../../auto_examples/preprocessing/plot_all_scaling.html#plot-all-scaling-power-transformer-section). To see the effect of Box-Cox and Yeo-Johnson transformations on different distributions, see: [Map data to a normal distribution](https://scikit-learn.org/stable/modules/generated/../../auto_examples/preprocessing/plot_map_data_to_normal.html#sphx-glr-auto-examples-preprocessing-plot-map-data-to-normal-py).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../preprocessing.html#preprocessing-transformer).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.PowerTransformer.html)

</td>
</tr>
<tr>
<td>

[PrecisionRecallDisplay](classes/PrecisionRecallDisplay.md)

</td>
<td>

Precision Recall visualization.

It is recommend to use [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay.from_estimator "sklearn.metrics.PrecisionRecallDisplay.from_estimator") or [`from_predictions`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay.from_predictions "sklearn.metrics.PrecisionRecallDisplay.from_predictions") to create a [`PrecisionRecallDisplay`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay "sklearn.metrics.PrecisionRecallDisplay"). All parameters are stored as attributes.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.PrecisionRecallDisplay.html)

</td>
</tr>
<tr>
<td>

[PredefinedSplit](classes/PredefinedSplit.md)

</td>
<td>

Predefined split cross-validator.

Provides train/test indices to split data into train/test sets using a predefined scheme specified by the user with the `test_fold` parameter.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../cross_validation.html#predefined-split).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.PredefinedSplit.html)

</td>
</tr>
<tr>
<td>

[PredictionErrorDisplay](classes/PredictionErrorDisplay.md)

</td>
<td>

Visualization of the prediction error of a regression model.

This tool can display “residuals vs predicted” or “actual vs predicted” using scatter plots to qualitatively assess the behavior of a regressor, preferably on held-out data points.

See the details in the docstrings of [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PredictionErrorDisplay.from_estimator "sklearn.metrics.PredictionErrorDisplay.from_estimator") or [`from_predictions`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PredictionErrorDisplay.from_predictions "sklearn.metrics.PredictionErrorDisplay.from_predictions") to create a visualizer. All parameters are stored as attributes.

For general information regarding `scikit-learn` visualization tools, read more in the [Visualization Guide](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations). For details regarding interpreting these plots, refer to the [Model Evaluation Guide](https://scikit-learn.org/stable/modules/generated/../model_evaluation.html#visualization-regression-evaluation).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.PredictionErrorDisplay.html)

</td>
</tr>
<tr>
<td>

[Product](classes/Product.md)

</td>
<td>

The `Product` kernel takes two kernels \\(k_1\\) and \\(k_2\\) and combines them via

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.Product.html)

</td>
</tr>
<tr>
<td>

[QuadraticDiscriminantAnalysis](classes/QuadraticDiscriminantAnalysis.md)

</td>
<td>

Quadratic Discriminant Analysis.

A classifier with a quadratic decision boundary, generated by fitting class conditional densities to the data and using Bayes’ rule.

The model fits a Gaussian density to each class.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.discriminant_analysis.QuadraticDiscriminantAnalysis.html)

</td>
</tr>
<tr>
<td>

[QuantileRegressor](classes/QuantileRegressor.md)

</td>
<td>

Linear regression model that predicts conditional quantiles.

The linear [`QuantileRegressor`](https://scikit-learn.org/stable/modules/generated/#sklearn.linear_model.QuantileRegressor "sklearn.linear_model.QuantileRegressor") optimizes the pinball loss for a desired `quantile` and is robust to outliers.

This model uses an L1 regularization like [`Lasso`](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Lasso.html#sklearn.linear_model.Lasso "sklearn.linear_model.Lasso").

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#quantile-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.QuantileRegressor.html)

</td>
</tr>
<tr>
<td>

[QuantileTransformer](classes/QuantileTransformer.md)

</td>
<td>

Transform features using quantiles information.

This method transforms the features to follow a uniform or a normal distribution. Therefore, for a given feature, this transformation tends to spread out the most frequent values. It also reduces the impact of (marginal) outliers: this is therefore a robust preprocessing scheme.

The transformation is applied on each feature independently. First an estimate of the cumulative distribution function of a feature is used to map the original values to a uniform distribution. The obtained values are then mapped to the desired output distribution using the associated quantile function. Features values of new/unseen data that fall below or above the fitted range will be mapped to the bounds of the output distribution. Note that this transform is non-linear. It may distort linear correlations between variables measured at the same scale but renders variables measured at different scales more directly comparable.

For example visualizations, refer to [Compare QuantileTransformer with other scalers](https://scikit-learn.org/stable/modules/generated/../../auto_examples/preprocessing/plot_all_scaling.html#plot-all-scaling-quantile-transformer-section).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../preprocessing.html#preprocessing-transformer).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.QuantileTransformer.html)

</td>
</tr>
<tr>
<td>

[RadiusNeighborsClassifier](classes/RadiusNeighborsClassifier.md)

</td>
<td>

Classifier implementing a vote among neighbors within a given radius.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../neighbors.html#classification).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.RadiusNeighborsClassifier.html)

</td>
</tr>
<tr>
<td>

[RadiusNeighborsRegressor](classes/RadiusNeighborsRegressor.md)

</td>
<td>

Regression based on neighbors within a fixed radius.

The target is predicted by local interpolation of the targets associated of the nearest neighbors in the training set.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../neighbors.html#regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.RadiusNeighborsRegressor.html)

</td>
</tr>
<tr>
<td>

[RadiusNeighborsTransformer](classes/RadiusNeighborsTransformer.md)

</td>
<td>

Transform X into a (weighted) graph of neighbors nearer than a radius.

The transformed data is a sparse graph as returned by `radius_neighbors_graph`.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../neighbors.html#neighbors-transformer).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.RadiusNeighborsTransformer.html)

</td>
</tr>
<tr>
<td>

[RandomForestClassifier](classes/RandomForestClassifier.md)

</td>
<td>

A random forest classifier.

A random forest is a meta estimator that fits a number of decision tree classifiers on various sub-samples of the dataset and uses averaging to improve the predictive accuracy and control over-fitting. Trees in the forest use the best split strategy, i.e. equivalent to passing `splitter="best"` to the underlying [`DecisionTreeRegressor`](https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeRegressor.html#sklearn.tree.DecisionTreeRegressor "sklearn.tree.DecisionTreeRegressor"). The sub-sample size is controlled with the `max_samples` parameter if `bootstrap=True` (default), otherwise the whole dataset is used to build each tree.

For a comparison between tree-based ensemble models see the example [Comparing Random Forests and Histogram Gradient Boosting models](https://scikit-learn.org/stable/modules/generated/../../auto_examples/ensemble/plot_forest_hist_grad_boosting_comparison.html#sphx-glr-auto-examples-ensemble-plot-forest-hist-grad-boosting-comparison-py).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../ensemble.html#forest).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html)

</td>
</tr>
<tr>
<td>

[RandomForestRegressor](classes/RandomForestRegressor.md)

</td>
<td>

A random forest regressor.

A random forest is a meta estimator that fits a number of decision tree regressors on various sub-samples of the dataset and uses averaging to improve the predictive accuracy and control over-fitting. Trees in the forest use the best split strategy, i.e. equivalent to passing `splitter="best"` to the underlying [`DecisionTreeRegressor`](https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeRegressor.html#sklearn.tree.DecisionTreeRegressor "sklearn.tree.DecisionTreeRegressor"). The sub-sample size is controlled with the `max_samples` parameter if `bootstrap=True` (default), otherwise the whole dataset is used to build each tree.

For a comparison between tree-based ensemble models see the example [Comparing Random Forests and Histogram Gradient Boosting models](https://scikit-learn.org/stable/modules/generated/../../auto_examples/ensemble/plot_forest_hist_grad_boosting_comparison.html#sphx-glr-auto-examples-ensemble-plot-forest-hist-grad-boosting-comparison-py).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../ensemble.html#forest).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestRegressor.html)

</td>
</tr>
<tr>
<td>

[RandomizedSearchCV](classes/RandomizedSearchCV.md)

</td>
<td>

Randomized search on hyper parameters.

RandomizedSearchCV implements a “fit” and a “score” method. It also implements “score_samples”, “predict”, “predict_proba”, “decision_function”, “transform” and “inverse_transform” if they are implemented in the estimator used.

The parameters of the estimator used to apply these methods are optimized by cross-validated search over parameter settings.

In contrast to GridSearchCV, not all parameter values are tried out, but rather a fixed number of parameter settings is sampled from the specified distributions. The number of parameter settings that are tried is given by n_iter.

If all parameters are presented as a list, sampling without replacement is performed. If at least one parameter is given as a distribution, sampling with replacement is used. It is highly recommended to use continuous distributions for continuous parameters.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../grid_search.html#randomized-parameter-search).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RandomizedSearchCV.html)

</td>
</tr>
<tr>
<td>

[RandomTreesEmbedding](classes/RandomTreesEmbedding.md)

</td>
<td>

An ensemble of totally random trees.

An unsupervised transformation of a dataset to a high-dimensional sparse representation. A datapoint is coded according to which leaf of each tree it is sorted into. Using a one-hot encoding of the leaves, this leads to a binary coding with as many ones as there are trees in the forest.

The dimensionality of the resulting representation is `n_out <= n_estimators \* max_leaf_nodes`. If `max_leaf_nodes \== None`, the number of leaf nodes is at most `n_estimators \* 2 \*\* max_depth`.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../ensemble.html#random-trees-embedding).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomTreesEmbedding.html)

</td>
</tr>
<tr>
<td>

[RANSACRegressor](classes/RANSACRegressor.md)

</td>
<td>

RANSAC (RANdom SAmple Consensus) algorithm.

RANSAC is an iterative algorithm for the robust estimation of parameters from a subset of inliers from the complete data set.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#ransac-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.RANSACRegressor.html)

</td>
</tr>
<tr>
<td>

[RationalQuadratic](classes/RationalQuadratic.md)

</td>
<td>

Rational Quadratic kernel.

The RationalQuadratic kernel can be seen as a scale mixture (an infinite sum) of RBF kernels with different characteristic length scales. It is parameterized by a length scale parameter \\(l>0\\) and a scale mixture parameter \\(\\alpha>0\\). Only the isotropic variant where length_scale \\(l\\) is a scalar is supported at the moment. The kernel is given by:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.RationalQuadratic.html)

</td>
</tr>
<tr>
<td>

[RBF](classes/RBF.md)

</td>
<td>

Radial basis function kernel (aka squared-exponential kernel).

The RBF kernel is a stationary kernel. It is also known as the “squared exponential” kernel. It is parameterized by a length scale parameter \\(l>0\\), which can either be a scalar (isotropic variant of the kernel) or a vector with the same number of dimensions as the inputs X (anisotropic variant of the kernel). The kernel is given by:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.RBF.html)

</td>
</tr>
<tr>
<td>

[RBFSampler](classes/RBFSampler.md)

</td>
<td>

Approximate a RBF kernel feature map using random Fourier features.

It implements a variant of Random Kitchen Sinks.\[1\]

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../kernel_approximation.html#rbf-kernel-approx).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.RBFSampler.html)

</td>
</tr>
<tr>
<td>

[RegressorChain](classes/RegressorChain.md)

</td>
<td>

A multi-label model that arranges regressions into a chain.

Each model makes a prediction in the order specified by the chain using all of the available features provided to the model plus the predictions of models that are earlier in the chain.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../multiclass.html#regressorchain).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multioutput.RegressorChain.html)

</td>
</tr>
<tr>
<td>

[RepeatedKFold](classes/RepeatedKFold.md)

</td>
<td>

Repeated K-Fold cross validator.

Repeats K-Fold n times with different randomization in each repetition.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../cross_validation.html#repeated-k-fold).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RepeatedKFold.html)

</td>
</tr>
<tr>
<td>

[RepeatedStratifiedKFold](classes/RepeatedStratifiedKFold.md)

</td>
<td>

Repeated Stratified K-Fold cross validator.

Repeats Stratified K-Fold n times with different randomization in each repetition.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../cross_validation.html#repeated-k-fold).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RepeatedStratifiedKFold.html)

</td>
</tr>
<tr>
<td>

[RFE](classes/RFE.md)

</td>
<td>

Feature ranking with recursive feature elimination.

Given an external estimator that assigns weights to features (e.g., the coefficients of a linear model), the goal of recursive feature elimination (RFE) is to select features by recursively considering smaller and smaller sets of features. First, the estimator is trained on the initial set of features and the importance of each feature is obtained either through any specific attribute or callable. Then, the least important features are pruned from current set of features. That procedure is recursively repeated on the pruned set until the desired number of features to select is eventually reached.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../feature_selection.html#rfe).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.RFE.html)

</td>
</tr>
<tr>
<td>

[RFECV](classes/RFECV.md)

</td>
<td>

Recursive feature elimination with cross-validation to select features.

The number of features selected is tuned automatically by fitting an [`RFE`](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.RFE.html#sklearn.feature_selection.RFE "sklearn.feature_selection.RFE") selector on the different cross-validation splits (provided by the `cv` parameter). The performance of the [`RFE`](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.RFE.html#sklearn.feature_selection.RFE "sklearn.feature_selection.RFE") selector are evaluated using `scorer` for different number of selected features and aggregated together. Finally, the scores are averaged across folds and the number of features selected is set to the number of features that maximize the cross-validation score. See glossary entry for [cross-validation estimator](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-cross-validation-estimator).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../feature_selection.html#rfe).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.RFECV.html)

</td>
</tr>
<tr>
<td>

[Ridge](classes/Ridge.md)

</td>
<td>

Linear least squares with l2 regularization.

Minimizes the objective function:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Ridge.html)

</td>
</tr>
<tr>
<td>

[RidgeClassifier](classes/RidgeClassifier.md)

</td>
<td>

Classifier using Ridge regression.

This classifier first converts the target values into `{-1, 1}` and then treats the problem as a regression task (multi-output regression in the multiclass case).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#ridge-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.RidgeClassifier.html)

</td>
</tr>
<tr>
<td>

[RidgeClassifierCV](classes/RidgeClassifierCV.md)

</td>
<td>

Ridge classifier with built-in cross-validation.

See glossary entry for [cross-validation estimator](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-cross-validation-estimator).

By default, it performs Leave-One-Out Cross-Validation. Currently, only the n_features > n_samples case is handled efficiently.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#ridge-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.RidgeClassifierCV.html)

</td>
</tr>
<tr>
<td>

[RidgeCV](classes/RidgeCV.md)

</td>
<td>

Ridge regression with built-in cross-validation.

See glossary entry for [cross-validation estimator](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-cross-validation-estimator).

By default, it performs efficient Leave-One-Out Cross-Validation.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#ridge-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.RidgeCV.html)

</td>
</tr>
<tr>
<td>

[RobustScaler](classes/RobustScaler.md)

</td>
<td>

Scale features using statistics that are robust to outliers.

This Scaler removes the median and scales the data according to the quantile range (defaults to IQR: Interquartile Range). The IQR is the range between the 1st quartile (25th quantile) and the 3rd quartile (75th quantile).

Centering and scaling happen independently on each feature by computing the relevant statistics on the samples in the training set. Median and interquartile range are then stored to be used on later data using the [`transform`](https://scikit-learn.org/stable/modules/generated/#sklearn.preprocessing.RobustScaler.transform "sklearn.preprocessing.RobustScaler.transform") method.

Standardization of a dataset is a common preprocessing for many machine learning estimators. Typically this is done by removing the mean and scaling to unit variance. However, outliers can often influence the sample mean / variance in a negative way. In such cases, using the median and the interquartile range often give better results. For an example visualization and comparison to other scalers, refer to [Compare RobustScaler with other scalers](https://scikit-learn.org/stable/modules/generated/../../auto_examples/preprocessing/plot_all_scaling.html#plot-all-scaling-robust-scaler-section).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.RobustScaler.html)

</td>
</tr>
<tr>
<td>

[RocCurveDisplay](classes/RocCurveDisplay.md)

</td>
<td>

ROC Curve visualization.

It is recommend to use [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.RocCurveDisplay.from_estimator "sklearn.metrics.RocCurveDisplay.from_estimator") or [`from_predictions`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.RocCurveDisplay.from_predictions "sklearn.metrics.RocCurveDisplay.from_predictions") to create a [`RocCurveDisplay`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.RocCurveDisplay "sklearn.metrics.RocCurveDisplay"). All parameters are stored as attributes.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.RocCurveDisplay.html)

</td>
</tr>
<tr>
<td>

[SelectFdr](classes/SelectFdr.md)

</td>
<td>

Filter: Select the p-values for an estimated false discovery rate.

This uses the Benjamini-Hochberg procedure. `alpha` is an upper bound on the expected false discovery rate.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../feature_selection.html#univariate-feature-selection).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SelectFdr.html)

</td>
</tr>
<tr>
<td>

[SelectFpr](classes/SelectFpr.md)

</td>
<td>

Filter: Select the pvalues below alpha based on a FPR test.

FPR test stands for `false` Positive Rate test. It controls the total amount of false detections.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../feature_selection.html#univariate-feature-selection).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SelectFpr.html)

</td>
</tr>
<tr>
<td>

[SelectFromModel](classes/SelectFromModel.md)

</td>
<td>

Meta-transformer for selecting features based on importance weights.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SelectFromModel.html)

</td>
</tr>
<tr>
<td>

[SelectFwe](classes/SelectFwe.md)

</td>
<td>

Filter: Select the p-values corresponding to Family-wise error rate.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../feature_selection.html#univariate-feature-selection).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SelectFwe.html)

</td>
</tr>
<tr>
<td>

[SelectKBest](classes/SelectKBest.md)

</td>
<td>

Select features according to the k highest scores.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../feature_selection.html#univariate-feature-selection).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SelectKBest.html)

</td>
</tr>
<tr>
<td>

[SelectorMixin](classes/SelectorMixin.md)

</td>
<td>

Transformer mixin that performs feature selection given a support mask

This mixin provides a feature selector implementation with `transform` and `inverse_transform` functionality given an implementation of `_get_support_mask`.

Examples

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SelectorMixin.html)

</td>
</tr>
<tr>
<td>

[SelectPercentile](classes/SelectPercentile.md)

</td>
<td>

Select features according to a percentile of the highest scores.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../feature_selection.html#univariate-feature-selection).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SelectPercentile.html)

</td>
</tr>
<tr>
<td>

[SelfTrainingClassifier](classes/SelfTrainingClassifier.md)

</td>
<td>

Self-training classifier.

This [metaestimator](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-metaestimator) allows a given supervised classifier to function as a semi-supervised classifier, allowing it to learn from unlabeled data. It does this by iteratively predicting pseudo-labels for the unlabeled data and adding them to the training set.

The classifier will continue iterating until either max_iter is reached, or no pseudo-labels were added to the training set in the previous iteration.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../semi_supervised.html#self-training).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.semi_supervised.SelfTrainingClassifier.html)

</td>
</tr>
<tr>
<td>

[SequentialFeatureSelector](classes/SequentialFeatureSelector.md)

</td>
<td>

Transformer that performs Sequential Feature Selection.

This Sequential Feature Selector adds (forward selection) or removes (backward selection) features to form a feature subset in a greedy fashion. At each stage, this estimator chooses the best feature to add or remove based on the cross-validation score of an estimator. In the case of unsupervised learning, this Sequential Feature Selector looks only at the features (X), not the desired outputs (y).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../feature_selection.html#sequential-feature-selection).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SequentialFeatureSelector.html)

</td>
</tr>
<tr>
<td>

[SGDClassifier](classes/SGDClassifier.md)

</td>
<td>

Linear classifiers (SVM, logistic regression, etc.) with SGD training.

This estimator implements regularized linear models with stochastic gradient descent (SGD) learning: the gradient of the loss is estimated each sample at a time and the model is updated along the way with a decreasing strength schedule (aka learning rate). SGD allows minibatch (online/out-of-core) learning via the `partial_fit` method. For best results using the default learning rate schedule, the data should have zero mean and unit variance.

This implementation works with data represented as dense or sparse arrays of floating point values for the features. The model it fits can be controlled with the loss parameter; by default, it fits a linear support vector machine (SVM).

The regularizer is a penalty added to the loss function that shrinks model parameters towards the zero vector using either the squared euclidean norm L2 or the absolute norm L1 or a combination of both (Elastic Net). If the parameter update crosses the 0.0 value because of the regularizer, the update is truncated to 0.0 to allow for learning sparse models and achieve online feature selection.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../sgd.html#sgd).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.SGDClassifier.html)

</td>
</tr>
<tr>
<td>

[SGDOneClassSVM](classes/SGDOneClassSVM.md)

</td>
<td>

Solves linear One-Class SVM using Stochastic Gradient Descent.

This implementation is meant to be used with a kernel approximation technique (e.g. `sklearn.kernel_approximation.Nystroem`) to obtain results similar to `sklearn.svm.OneClassSVM` which uses a Gaussian kernel by default.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../sgd.html#sgd-online-one-class-svm).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.SGDOneClassSVM.html)

</td>
</tr>
<tr>
<td>

[SGDRegressor](classes/SGDRegressor.md)

</td>
<td>

Linear model fitted by minimizing a regularized empirical loss with SGD.

SGD stands for Stochastic Gradient Descent: the gradient of the loss is estimated each sample at a time and the model is updated along the way with a decreasing strength schedule (aka learning rate).

The regularizer is a penalty added to the loss function that shrinks model parameters towards the zero vector using either the squared euclidean norm L2 or the absolute norm L1 or a combination of both (Elastic Net). If the parameter update crosses the 0.0 value because of the regularizer, the update is truncated to 0.0 to allow for learning sparse models and achieve online feature selection.

This implementation works with data represented as dense numpy arrays of floating point values for the features.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../sgd.html#sgd).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.SGDRegressor.html)

</td>
</tr>
<tr>
<td>

[ShrunkCovariance](classes/ShrunkCovariance.md)

</td>
<td>

Covariance estimator with shrinkage.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../covariance.html#shrunk-covariance).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.ShrunkCovariance.html)

</td>
</tr>
<tr>
<td>

[ShuffleSplit](classes/ShuffleSplit.md)

</td>
<td>

Random permutation cross-validator.

Yields indices to split data into training and test sets.

Note: contrary to other cross-validation strategies, random splits do not guarantee that test sets across all folds will be mutually exclusive, and might include overlapping samples. However, this is still very likely for sizeable datasets.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../cross_validation.html#shufflesplit).

For visualisation of cross-validation behaviour and comparison between common scikit-learn split methods refer to [Visualizing cross-validation behavior in scikit-learn](https://scikit-learn.org/stable/modules/generated/../../auto_examples/model_selection/plot_cv_indices.html#sphx-glr-auto-examples-model-selection-plot-cv-indices-py)

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.ShuffleSplit.html)

</td>
</tr>
<tr>
<td>

[SimpleImputer](classes/SimpleImputer.md)

</td>
<td>

Univariate imputer for completing missing values with simple strategies.

Replace missing values using a descriptive statistic (e.g. mean, median, or most frequent) along each column, or using a constant value.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../impute.html#impute).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.impute.SimpleImputer.html)

</td>
</tr>
<tr>
<td>

[SkewedChi2Sampler](classes/SkewedChi2Sampler.md)

</td>
<td>

Approximate feature map for “skewed chi-squared” kernel.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../kernel_approximation.html#skewed-chi-kernel-approx).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.SkewedChi2Sampler.html)

</td>
</tr>
<tr>
<td>

[SparseCoder](classes/SparseCoder.md)

</td>
<td>

Sparse coding.

Finds a sparse representation of data against a fixed, precomputed dictionary.

Each row of the result is the solution to a sparse coding problem. The goal is to find a sparse array `code` such that:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.SparseCoder.html)

</td>
</tr>
<tr>
<td>

[SparsePCA](classes/SparsePCA.md)

</td>
<td>

Sparse Principal Components Analysis (SparsePCA).

Finds the set of sparse components that can optimally reconstruct the data. The amount of sparseness is controllable by the coefficient of the L1 penalty, given by the parameter alpha.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../decomposition.html#sparsepca).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.SparsePCA.html)

</td>
</tr>
<tr>
<td>

[SparseRandomProjection](classes/SparseRandomProjection.md)

</td>
<td>

Reduce dimensionality through sparse random projection.

Sparse random matrix is an alternative to dense random projection matrix that guarantees similar embedding quality while being much more memory efficient and allowing faster computation of the projected data.

If we note `s \= 1 / density` the components of the random matrix are drawn from:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.random_projection.SparseRandomProjection.html)

</td>
</tr>
<tr>
<td>

[SpectralBiclustering](classes/SpectralBiclustering.md)

</td>
<td>

Spectral biclustering (Kluger, 2003).

Partitions rows and columns under the assumption that the data has an underlying checkerboard structure. For instance, if there are two row partitions and three column partitions, each row will belong to three biclusters, and each column will belong to two biclusters. The outer product of the corresponding row and column label vectors gives this checkerboard structure.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../biclustering.html#spectral-biclustering).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.SpectralBiclustering.html)

</td>
</tr>
<tr>
<td>

[SpectralClustering](classes/SpectralClustering.md)

</td>
<td>

Apply clustering to a projection of the normalized Laplacian.

In practice Spectral Clustering is very useful when the structure of the individual clusters is highly non-convex, or more generally when a measure of the center and spread of the cluster is not a suitable description of the complete cluster, such as when clusters are nested circles on the 2D plane.

If the affinity matrix is the adjacency matrix of a graph, this method can be used to find normalized graph cuts [\[1\]](https://scikit-learn.org/stable/modules/generated/#r5f6cbeb1558e-1), [\[2\]](https://scikit-learn.org/stable/modules/generated/#r5f6cbeb1558e-2).

When calling `fit`, an affinity matrix is constructed using either a kernel function such the Gaussian (aka RBF) kernel with Euclidean distance `d(X, X)`:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.SpectralClustering.html)

</td>
</tr>
<tr>
<td>

[SpectralCoclustering](classes/SpectralCoclustering.md)

</td>
<td>

Spectral Co-Clustering algorithm (Dhillon, 2001).

Clusters rows and columns of an array `X` to solve the relaxed normalized cut of the bipartite graph created from `X` as follows: the edge between row vertex `i` and column vertex `j` has weight `X\[i, j\]`.

The resulting bicluster structure is block-diagonal, since each row and each column belongs to exactly one bicluster.

Supports sparse matrices, as long as they are nonnegative.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../biclustering.html#spectral-coclustering).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.SpectralCoclustering.html)

</td>
</tr>
<tr>
<td>

[SpectralEmbedding](classes/SpectralEmbedding.md)

</td>
<td>

Spectral embedding for non-linear dimensionality reduction.

Forms an affinity matrix given by the specified function and applies spectral decomposition to the corresponding graph laplacian. The resulting transformation is given by the value of the eigenvectors for each data point.

Note : Laplacian Eigenmaps is the actual algorithm implemented here.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../manifold.html#spectral-embedding).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.SpectralEmbedding.html)

</td>
</tr>
<tr>
<td>

[SplineTransformer](classes/SplineTransformer.md)

</td>
<td>

Generate univariate B-spline bases for features.

Generate a new feature matrix consisting of `n_splines=n_knots + degree \- 1` (`n_knots \- 1` for `extrapolation="periodic"`) spline basis functions (B-splines) of polynomial order=`degree` for each feature.

In order to learn more about the SplineTransformer class go to: [Time-related feature engineering](https://scikit-learn.org/stable/modules/generated/../../auto_examples/applications/plot_cyclical_feature_engineering.html#sphx-glr-auto-examples-applications-plot-cyclical-feature-engineering-py)

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../preprocessing.html#spline-transformer).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.SplineTransformer.html)

</td>
</tr>
<tr>
<td>

[StackingClassifier](classes/StackingClassifier.md)

</td>
<td>

Stack of estimators with a final classifier.

Stacked generalization consists in stacking the output of individual estimator and use a classifier to compute the final prediction. Stacking allows to use the strength of each individual estimator by using their output as input of a final estimator.

Note that `estimators_` are fitted on the full `X` while `final_estimator_` is trained using cross-validated predictions of the base estimators using `cross_val_predict`.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../ensemble.html#stacking).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.StackingClassifier.html)

</td>
</tr>
<tr>
<td>

[StackingRegressor](classes/StackingRegressor.md)

</td>
<td>

Stack of estimators with a final regressor.

Stacked generalization consists in stacking the output of individual estimator and use a regressor to compute the final prediction. Stacking allows to use the strength of each individual estimator by using their output as input of a final estimator.

Note that `estimators_` are fitted on the full `X` while `final_estimator_` is trained using cross-validated predictions of the base estimators using `cross_val_predict`.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../ensemble.html#stacking).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.StackingRegressor.html)

</td>
</tr>
<tr>
<td>

[StandardScaler](classes/StandardScaler.md)

</td>
<td>

Standardize features by removing the mean and scaling to unit variance.

The standard score of a sample `x` is calculated as:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html)

</td>
</tr>
<tr>
<td>

[StratifiedGroupKFold](classes/StratifiedGroupKFold.md)

</td>
<td>

Stratified K-Fold iterator variant with non-overlapping groups.

This cross-validation object is a variation of StratifiedKFold attempts to return stratified folds with non-overlapping groups. The folds are made by preserving the percentage of samples for each class.

Each group will appear exactly once in the test set across all folds (the number of distinct groups has to be at least equal to the number of folds).

The difference between [`GroupKFold`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GroupKFold.html#sklearn.model_selection.GroupKFold "sklearn.model_selection.GroupKFold") and `StratifiedGroupKFold` is that the former attempts to create balanced folds such that the number of distinct groups is approximately the same in each fold, whereas `StratifiedGroupKFold` attempts to create folds which preserve the percentage of samples for each class as much as possible given the constraint of non-overlapping groups between splits.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../cross_validation.html#stratified-group-k-fold).

For visualisation of cross-validation behaviour and comparison between common scikit-learn split methods refer to [Visualizing cross-validation behavior in scikit-learn](https://scikit-learn.org/stable/modules/generated/../../auto_examples/model_selection/plot_cv_indices.html#sphx-glr-auto-examples-model-selection-plot-cv-indices-py)

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.StratifiedGroupKFold.html)

</td>
</tr>
<tr>
<td>

[StratifiedKFold](classes/StratifiedKFold.md)

</td>
<td>

Stratified K-Fold cross-validator.

Provides train/test indices to split data in train/test sets.

This cross-validation object is a variation of KFold that returns stratified folds. The folds are made by preserving the percentage of samples for each class.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../cross_validation.html#stratified-k-fold).

For visualisation of cross-validation behaviour and comparison between common scikit-learn split methods refer to [Visualizing cross-validation behavior in scikit-learn](https://scikit-learn.org/stable/modules/generated/../../auto_examples/model_selection/plot_cv_indices.html#sphx-glr-auto-examples-model-selection-plot-cv-indices-py)

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.StratifiedKFold.html)

</td>
</tr>
<tr>
<td>

[StratifiedShuffleSplit](classes/StratifiedShuffleSplit.md)

</td>
<td>

Stratified ShuffleSplit cross-validator.

Provides train/test indices to split data in train/test sets.

This cross-validation object is a merge of [`StratifiedKFold`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.StratifiedKFold.html#sklearn.model_selection.StratifiedKFold "sklearn.model_selection.StratifiedKFold") and [`ShuffleSplit`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.ShuffleSplit.html#sklearn.model_selection.ShuffleSplit "sklearn.model_selection.ShuffleSplit"), which returns stratified randomized folds. The folds are made by preserving the percentage of samples for each class.

Note: like the [`ShuffleSplit`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.ShuffleSplit.html#sklearn.model_selection.ShuffleSplit "sklearn.model_selection.ShuffleSplit") strategy, stratified random splits do not guarantee that test sets across all folds will be mutually exclusive, and might include overlapping samples. However, this is still very likely for sizeable datasets.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../cross_validation.html#stratified-shuffle-split).

For visualisation of cross-validation behaviour and comparison between common scikit-learn split methods refer to [Visualizing cross-validation behavior in scikit-learn](https://scikit-learn.org/stable/modules/generated/../../auto_examples/model_selection/plot_cv_indices.html#sphx-glr-auto-examples-model-selection-plot-cv-indices-py)

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.StratifiedShuffleSplit.html)

</td>
</tr>
<tr>
<td>

[Sum](classes/Sum.md)

</td>
<td>

The `Sum` kernel takes two kernels \\(k_1\\) and \\(k_2\\) and combines them via

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.Sum.html)

</td>
</tr>
<tr>
<td>

[SVC](classes/SVC.md)

</td>
<td>

C-Support Vector Classification.

The implementation is based on libsvm. The fit time scales at least quadratically with the number of samples and may be impractical beyond tens of thousands of samples. For large datasets consider using [`LinearSVC`](https://scikit-learn.org/stable/modules/generated/sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC "sklearn.svm.LinearSVC") or [`SGDClassifier`](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.SGDClassifier.html#sklearn.linear_model.SGDClassifier "sklearn.linear_model.SGDClassifier") instead, possibly after a [`Nystroem`](https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.Nystroem.html#sklearn.kernel_approximation.Nystroem "sklearn.kernel_approximation.Nystroem") transformer or other [Kernel Approximation](https://scikit-learn.org/stable/modules/generated/../kernel_approximation.html#kernel-approximation).

The multiclass support is handled according to a one-vs-one scheme.

For details on the precise mathematical formulation of the provided kernel functions and how `gamma`, `coef0` and `degree` affect each other, see the corresponding section in the narrative documentation: [Kernel functions](https://scikit-learn.org/stable/modules/generated/../svm.html#svm-kernels).

To learn how to tune SVC’s hyperparameters, see the following example: [Nested versus non-nested cross-validation](https://scikit-learn.org/stable/modules/generated/../../auto_examples/model_selection/plot_nested_cross_validation_iris.html#sphx-glr-auto-examples-model-selection-plot-nested-cross-validation-iris-py)

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../svm.html#svm-classification).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC.html)

</td>
</tr>
<tr>
<td>

[SVR](classes/SVR.md)

</td>
<td>

Epsilon-Support Vector Regression.

The free parameters in the model are C and epsilon.

The implementation is based on libsvm. The fit time complexity is more than quadratic with the number of samples which makes it hard to scale to datasets with more than a couple of 10000 samples. For large datasets consider using [`LinearSVR`](https://scikit-learn.org/stable/modules/generated/sklearn.svm.LinearSVR.html#sklearn.svm.LinearSVR "sklearn.svm.LinearSVR") or [`SGDRegressor`](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.SGDRegressor.html#sklearn.linear_model.SGDRegressor "sklearn.linear_model.SGDRegressor") instead, possibly after a [`Nystroem`](https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.Nystroem.html#sklearn.kernel_approximation.Nystroem "sklearn.kernel_approximation.Nystroem") transformer or other [Kernel Approximation](https://scikit-learn.org/stable/modules/generated/../kernel_approximation.html#kernel-approximation).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../svm.html#svm-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVR.html)

</td>
</tr>
<tr>
<td>

[TargetEncoder](classes/TargetEncoder.md)

</td>
<td>

Target Encoder for regression and classification targets.

Each category is encoded based on a shrunk estimate of the average target values for observations belonging to the category. The encoding scheme mixes the global target mean with the target mean conditioned on the value of the category (see [\[MIC\]](https://scikit-learn.org/stable/modules/generated/#rf862141e5a0c-mic)).

When the target type is “multiclass”, encodings are based on the conditional probability estimate for each class. The target is first binarized using the “one-vs-all” scheme via [`LabelBinarizer`](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.LabelBinarizer.html#sklearn.preprocessing.LabelBinarizer "sklearn.preprocessing.LabelBinarizer"), then the average target value for each class and each category is used for encoding, resulting in `n_features` \* `n_classes` encoded output features.

[`TargetEncoder`](https://scikit-learn.org/stable/modules/generated/#sklearn.preprocessing.TargetEncoder "sklearn.preprocessing.TargetEncoder") considers missing values, such as `np.nan` or `undefined`, as another category and encodes them like any other category. Categories that are not seen during [`fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.preprocessing.TargetEncoder.fit "sklearn.preprocessing.TargetEncoder.fit") are encoded with the target mean, i.e. `target_mean_`.

For a demo on the importance of the `TargetEncoder` internal cross-fitting, see [Target Encoder’s Internal Cross fitting](https://scikit-learn.org/stable/modules/generated/../../auto_examples/preprocessing/plot_target_encoder_cross_val.html#sphx-glr-auto-examples-preprocessing-plot-target-encoder-cross-val-py). For a comparison of different encoders, refer to [Comparing Target Encoder with Other Encoders](https://scikit-learn.org/stable/modules/generated/../../auto_examples/preprocessing/plot_target_encoder.html#sphx-glr-auto-examples-preprocessing-plot-target-encoder-py). Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../preprocessing.html#target-encoder).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.TargetEncoder.html)

</td>
</tr>
<tr>
<td>

[TfidfTransformer](classes/TfidfTransformer.md)

</td>
<td>

Transform a count matrix to a normalized tf or tf-idf representation.

Tf means term-frequency while tf-idf means term-frequency times inverse document-frequency. This is a common term weighting scheme in information retrieval, that has also found good use in document classification.

The goal of using tf-idf instead of the raw frequencies of occurrence of a token in a given document is to scale down the impact of tokens that occur very frequently in a given corpus and that are hence empirically less informative than features that occur in a small fraction of the training corpus.

The formula that is used to compute the tf-idf for a term t of a document d in a document set is tf-idf(t, d) = tf(t, d) \* idf(t), and the idf is computed as idf(t) = log \[ n / df(t) \] + 1 (if `smooth_idf=False`), where n is the total number of documents in the document set and df(t) is the document frequency of t; the document frequency is the number of documents in the document set that contain the term t. The effect of adding “1” to the idf in the equation above is that terms with zero idf, i.e., terms that occur in all documents in a training set, will not be entirely ignored. (Note that the idf formula above differs from the standard textbook notation that defines the idf as idf(t) = log \[ n / (df(t) + 1) \]).

If `smooth_idf=True` (the default), the constant “1” is added to the numerator and denominator of the idf as if an extra document was seen containing every term in the collection exactly once, which prevents zero divisions: idf(t) = log \[ (1 + n) / (1 + df(t)) \] + 1.

Furthermore, the formulas used to compute tf and idf depend on parameter settings that correspond to the SMART notation used in IR as follows:

Tf is “n” (natural) by default, “l” (logarithmic) when `sublinear_tf=True`. Idf is “t” when use_idf is given, “n” (none) otherwise. Normalization is “c” (cosine) when `norm='l2'`, “n” (none) when `norm=None`.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../feature_extraction.html#text-feature-extraction).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfTransformer.html)

</td>
</tr>
<tr>
<td>

[TfidfVectorizer](classes/TfidfVectorizer.md)

</td>
<td>

Convert a collection of raw documents to a matrix of TF-IDF features.

Equivalent to [`CountVectorizer`](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.CountVectorizer.html#sklearn.feature_extraction.text.CountVectorizer "sklearn.feature_extraction.text.CountVectorizer") followed by [`TfidfTransformer`](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfTransformer.html#sklearn.feature_extraction.text.TfidfTransformer "sklearn.feature_extraction.text.TfidfTransformer").

For an example of usage, see [Classification of text documents using sparse features](https://scikit-learn.org/stable/modules/generated/../../auto_examples/text/plot_document_classification_20newsgroups.html#sphx-glr-auto-examples-text-plot-document-classification-20newsgroups-py).

For an efficiency comparison of the different feature extractors, see [FeatureHasher and DictVectorizer Comparison](https://scikit-learn.org/stable/modules/generated/../../auto_examples/text/plot_hashing_vs_dict_vectorizer.html#sphx-glr-auto-examples-text-plot-hashing-vs-dict-vectorizer-py).

For an example of document clustering and comparison with [`HashingVectorizer`](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.HashingVectorizer.html#sklearn.feature_extraction.text.HashingVectorizer "sklearn.feature_extraction.text.HashingVectorizer"), see [Clustering text documents using k-means](https://scikit-learn.org/stable/modules/generated/../../auto_examples/text/plot_document_clustering.html#sphx-glr-auto-examples-text-plot-document-clustering-py).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../feature_extraction.html#text-feature-extraction).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfVectorizer.html)

</td>
</tr>
<tr>
<td>

[TheilSenRegressor](classes/TheilSenRegressor.md)

</td>
<td>

Theil-Sen Estimator: robust multivariate regression model.

The algorithm calculates least square solutions on subsets with size n_subsamples of the samples in X. Any value of n_subsamples between the number of features and samples leads to an estimator with a compromise between robustness and efficiency. Since the number of least square solutions is “n_samples choose n_subsamples”, it can be extremely large and can therefore be limited with max_subpopulation. If this limit is reached, the subsets are chosen randomly. In a final step, the spatial median (or L1 median) is calculated of all least square solutions.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#theil-sen-regression).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.TheilSenRegressor.html)

</td>
</tr>
<tr>
<td>

[TimeSeriesSplit](classes/TimeSeriesSplit.md)

</td>
<td>

Time Series cross-validator.

Provides train/test indices to split time series data samples that are observed at fixed time intervals, in train/test sets. In each split, test indices must be higher than before, and thus shuffling in cross validator is inappropriate.

This cross-validation object is a variation of [`KFold`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.KFold.html#sklearn.model_selection.KFold "sklearn.model_selection.KFold"). In the kth split, it returns first k folds as train set and the (k+1)th fold as test set.

Note that unlike standard cross-validation methods, successive training sets are supersets of those that come before them.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../cross_validation.html#time-series-split).

For visualisation of cross-validation behaviour and comparison between common scikit-learn split methods refer to [Visualizing cross-validation behavior in scikit-learn](https://scikit-learn.org/stable/modules/generated/../../auto_examples/model_selection/plot_cv_indices.html#sphx-glr-auto-examples-model-selection-plot-cv-indices-py)

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.TimeSeriesSplit.html)

</td>
</tr>
<tr>
<td>

[TransformedTargetRegressor](classes/TransformedTargetRegressor.md)

</td>
<td>

Meta-estimator to regress on a transformed target.

Useful for applying a non-linear transformation to the target `y` in regression problems. This transformation can be given as a Transformer such as the [`QuantileTransformer`](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.QuantileTransformer.html#sklearn.preprocessing.QuantileTransformer "sklearn.preprocessing.QuantileTransformer") or as a function and its inverse such as `np.log` and `np.exp`.

The computation during [`fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.compose.TransformedTargetRegressor.fit "sklearn.compose.TransformedTargetRegressor.fit") is:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.compose.TransformedTargetRegressor.html)

</td>
</tr>
<tr>
<td>

[TruncatedSVD](classes/TruncatedSVD.md)

</td>
<td>

Dimensionality reduction using truncated SVD (aka LSA).

This transformer performs linear dimensionality reduction by means of truncated singular value decomposition (SVD). Contrary to PCA, this estimator does not center the data before computing the singular value decomposition. This means it can work with sparse matrices efficiently.

In particular, truncated SVD works on term count/tf-idf matrices as returned by the vectorizers in [`sklearn.feature_extraction.text`](https://scikit-learn.org/stable/modules/generated/../../api/sklearn.feature_extraction.html#module-sklearn.feature_extraction.text "sklearn.feature_extraction.text"). In that context, it is known as latent semantic analysis (LSA).

This estimator supports two algorithms: a fast randomized SVD solver, and a “naive” algorithm that uses ARPACK as an eigensolver on `X \* X.T` or `X.T \* X`, whichever is more efficient.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../decomposition.html#lsa).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.TruncatedSVD.html)

</td>
</tr>
<tr>
<td>

[TSNE](classes/TSNE.md)

</td>
<td>

T-distributed Stochastic Neighbor Embedding.

t-SNE \[1\] is a tool to visualize high-dimensional data. It converts similarities between data points to joint probabilities and tries to minimize the Kullback-Leibler divergence between the joint probabilities of the low-dimensional embedding and the high-dimensional data. t-SNE has a cost function that is not convex, i.e. with different initializations we can get different results.

It is highly recommended to use another dimensionality reduction method (e.g. PCA for dense data or TruncatedSVD for sparse data) to reduce the number of dimensions to a reasonable amount (e.g. 50) if the number of features is very high. This will suppress some noise and speed up the computation of pairwise distances between samples. For more tips see Laurens van der Maaten’s FAQ \[2\].

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../manifold.html#t-sne).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.TSNE.html)

</td>
</tr>
<tr>
<td>

[TunedThresholdClassifierCV](classes/TunedThresholdClassifierCV.md)

</td>
<td>

Classifier that post-tunes the decision threshold using cross-validation.

This estimator post-tunes the decision threshold (cut-off point) that is used for converting posterior probability estimates (i.e. output of `predict_proba`) or decision scores (i.e. output of `decision_function`) into a class label. The tuning is done by optimizing a binary metric, potentially constrained by a another metric.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../classification_threshold.html#tunedthresholdclassifiercv).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.TunedThresholdClassifierCV.html)

</td>
</tr>
<tr>
<td>

[TweedieRegressor](classes/TweedieRegressor.md)

</td>
<td>

Generalized Linear Model with a Tweedie distribution.

This estimator can be used to model different GLMs depending on the `power` parameter, which determines the underlying distribution.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#generalized-linear-models).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.TweedieRegressor.html)

</td>
</tr>
<tr>
<td>

[ValidationCurveDisplay](classes/ValidationCurveDisplay.md)

</td>
<td>

Validation Curve visualization.

It is recommended to use [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.model_selection.ValidationCurveDisplay.from_estimator "sklearn.model_selection.ValidationCurveDisplay.from_estimator") to create a [`ValidationCurveDisplay`](https://scikit-learn.org/stable/modules/generated/#sklearn.model_selection.ValidationCurveDisplay "sklearn.model_selection.ValidationCurveDisplay") instance. All parameters are stored as attributes.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations) for general information about the visualization API and [detailed documentation](https://scikit-learn.org/stable/modules/generated/../learning_curve.html#validation-curve) regarding the validation curve visualization.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.ValidationCurveDisplay.html)

</td>
</tr>
<tr>
<td>

[VarianceThreshold](classes/VarianceThreshold.md)

</td>
<td>

Feature selector that removes all low-variance features.

This feature selection algorithm looks only at the features (X), not the desired outputs (y), and can thus be used for unsupervised learning.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../feature_selection.html#variance-threshold).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.VarianceThreshold.html)

</td>
</tr>
<tr>
<td>

[VotingClassifier](classes/VotingClassifier.md)

</td>
<td>

Soft Voting/Majority Rule classifier for unfitted estimators.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../ensemble.html#voting-classifier).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.VotingClassifier.html)

</td>
</tr>
<tr>
<td>

[VotingRegressor](classes/VotingRegressor.md)

</td>
<td>

Prediction voting regressor for unfitted estimators.

A voting regressor is an ensemble meta-estimator that fits several base regressors, each on the whole dataset. Then it averages the individual predictions to form a final prediction.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../ensemble.html#voting-regressor).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.VotingRegressor.html)

</td>
</tr>
<tr>
<td>

[WhiteKernel](classes/WhiteKernel.md)

</td>
<td>

White kernel.

The main use-case of this kernel is as part of a sum-kernel where it explains the noise of the signal as independently and identically normally-distributed. The parameter noise_level equals the variance of this noise.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.WhiteKernel.html)

</td>
</tr>
</tbody>
</table>

## Type Aliases

<table>
<thead>
<tr>
<th>Type alias</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[ArrayLike](type-aliases/ArrayLike.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

[NDArray](type-aliases/NDArray.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

[SparseMatrix](type-aliases/SparseMatrix.md)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

## Variables

<table>
<thead>
<tr>
<th>Variable</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[SCIKIT\_LEARN\_VERSION](variables/SCIKIT_LEARN_VERSION.md)

</td>
<td>

The version of the python `scikit-learn` module this package was built with.

Other versions may work, but there may be minor differences in the generated
types. We recommend against using other major versions.

</td>
</tr>
</tbody>
</table>

## Functions

<table>
<thead>
<tr>
<th>Function</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[createPythonBridge](functions/createPythonBridge.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

[validatePythonBridge](functions/validatePythonBridge.md)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>
