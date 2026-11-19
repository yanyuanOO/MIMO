# Dataset Card for MIMOSeg

## Dataset summary

MIMOSeg is a medical multimodal dataset introduced with MIMO at CVPR 2025. It is designed to train and evaluate models that accept textual instructions with optional visual prompts and produce natural-language responses aligned to pixel-level segmentation masks.

The paper reports a dataset scale of 895K samples. Supplementary Table 6 enumerates 872,590 samples across four construction perspectives. Before public release, replace every `TBD` below and record the exact downloadable version count.

## Dataset details

- **Dataset name:** MIMOSeg
- **Dataset URL:** https://modelscope.cn/models/heavenbird/MIMOSeg
- **Version:** TBD
- **Release date:** TBD
- **Maintainers:** Yanyuan Chen, Dexuan Xu, and the MIMO authors (confirm final list)
- **Repository:** https://github.com/yanyuanOO/MIMO
- **Paper:** https://openaccess.thecvf.com/content/CVPR2025/html/Chen_MIMO_A_Medical_Vision_Language_Model_with_Visual_Referring_Multimodal_CVPR_2025_paper.html
- **Languages:** English instructions and answers
- **Modalities:** CT, MRI, dermoscopy, PET, endoscopy, X-ray, ultrasound, fundus photography
- **License / terms:** TBD; source-specific terms also apply

## Supported tasks

1. **Language-guided segmentation:** image and text instruction to mask.
2. **Visual prompt perceiving:** image, instruction, and point or box to text and mask.
3. **Response–segmentation alignment:** medical QA with entity-aligned masks.
4. **Visual prompt assisted QA:** medical QA guided by a point or bounding box, with grounded output.

## Dataset composition

### Counts reported in supplementary Table 6

| Perspective | Train | Validation | Test | Total |
| --- | ---: | ---: | ---: | ---: |
| P-I | 249,665 | 2,564 | 2,545 | 254,774 |
| P-II | 249,698 | 2,552 | 2,334 | 254,584 |
| P-III | 181,046 | 726 | 726 | 182,498 |
| P-IV | 178,594 | 1,070 | 1,070 | 180,734 |
| **Total** | **859,003** | **6,912** | **6,675** | **872,590** |

### Exact released counts

| Artifact | Records | SHA-256 | Notes |
| --- | ---: | --- | --- |
| `manifests/train.jsonl` | TBD | TBD | TBD |
| `manifests/validation.jsonl` | TBD | TBD | TBD |
| `manifests/test.jsonl` | TBD | TBD | TBD |

## Data sources

MIMOSeg is constructed from public medical segmentation datasets. Complete the source-by-source review in `LICENSES/SOURCE_LICENSE_MATRIX.csv` before redistribution. For each source, record:

- canonical dataset URL and citation;
- version and download date;
- license or terms URL;
- whether original files may be redistributed;
- whether commercial use is permitted;
- attribution or notice requirements;
- any registration, credentialing, or data-use agreement;
- the release mechanism used by MIMOSeg.

If redistribution is unclear or forbidden, do not bundle the source images. Release only the material you are permitted to distribute and provide preparation scripts keyed to stable upstream identifiers.

## Construction process

According to the paper:

1. Public segmentation datasets provide images, labels, and masks.
2. A knowledge base covers segmentation labels using accessible sources including Wikipedia and UMLS.
3. Template-based instructions and responses are used for Perspectives I and II.
4. Knowledge-conditioned prompts are used with GPT-4o to generate questions and answers for Perspectives III and IV.
5. Validation and test examples for Perspectives III and IV are manually filtered to remove questions or answers unrelated to image content.

Before release, document the exact model version, generation dates, prompt versions, sampling parameters, automated filters, manual review protocol, reviewer qualifications, rejection rates, and any post-processing.

## Personal and sensitive information

The paper states that the source datasets are public and that data collection follows source terms and privacy rights. The release team should still verify that:

- no DICOM headers, burned-in identifiers, filenames, paths, or metadata expose personal information;
- derived artifacts cannot trivially reconstruct identifiers removed upstream;
- provenance and de-identification checks are logged;
- any source-specific data use restrictions are preserved.

Add the outcome of the privacy review here before release.

## Intended uses

- Research on medical visual referring, grounded medical QA, reasoning segmentation, and multimodal model evaluation.
- Reproduction and extension of the MIMO experiments.
- Non-clinical benchmarking under the applicable source terms.

## Out-of-scope uses

- Clinical diagnosis, triage, treatment planning, patient management, or autonomous decision-making.
- Re-identification or attempts to infer personal information.
- Uses prohibited by upstream dataset terms, law, institutional policy, or ethics review.
- Claims of clinical safety or efficacy based only on benchmark results.

## Known limitations and risks

- Generated text may contain hallucinations, factual errors, or overconfident medical claims.
- Source datasets may have demographic, geographic, institutional, device, disease-prevalence, and annotation biases.
- Slice-level samples may share patients or studies; split construction must prevent leakage and document grouping units.
- Knowledge retrieval and generated QA may contain terminology drift or ambiguous entity–mask alignment.
- Class and modality frequencies are imbalanced.
- Segmentation quality and label definitions vary across upstream datasets.
- The release may not exactly match the paper’s 895K headline unless version differences are reconciled.

## Split and leakage policy

State whether splitting occurs by patient, study, volume, video, image, or another unit for each source. Confirm that no patient, volume, near-duplicate image, or derived QA pair crosses splits. Publish the leakage-check method and summary statistics.

## Quality assurance

Before release, report:

- schema validation rate;
- missing-file and checksum validation;
- mask geometry and label validation;
- duplicate and near-duplicate detection;
- QA relevance and medical plausibility audit;
- grounding alignment audit;
- privacy scan;
- source-license review completion.

## Maintenance

- **Issue tracker:** https://github.com/pkusixspace/MIMO/issues
- **Versioning policy:** Use semantic dataset versions and immutable checksums.
- **Corrections:** Document removals and corrections in `docs/CHANGELOG.md` without silently replacing released artifacts.
- **Takedown process:** Add a monitored contact and response policy before launch.
