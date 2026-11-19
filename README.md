<div align="center">

# MIMO

### A Medical Vision-Language Model with Visual Referring Multimodal Input and Pixel Grounding Multimodal Output

**CVPR 2025**

[Paper](https://openaccess.thecvf.com/content/CVPR2025/papers/Chen_MIMO_A_Medical_Vision_Language_Model_with_Visual_Referring_Multimodal_CVPR_2025_paper.pdf) · [arXiv](https://arxiv.org/abs/2510.10011) · [Project page](https://yanyuanoo.github.io/MIMO/) · [Dataset](https://modelscope.cn/models/heavenbird/MIMOSeg)

</div>

> **Dataset:** MIMOSeg is available on [ModelScope](https://modelscope.cn/models/heavenbird/MIMOSeg).

## Overview

MIMO is a medical vision-language model that combines:

- **Visual referring input:** users may provide a point or bounding box alongside an image and text instruction.
- **Pixel-grounded output:** medical concepts in the generated response are linked to pixel-level segmentation masks.
- **Multi-region reasoning:** the model can discuss and ground multiple medical entities in one response.

MIMO is trained with **MIMOSeg**, a large-scale medical multimodal dataset covering instruction following and question answering across eight imaging modalities.

## MIMOSeg

MIMOSeg is organized around four perspectives:

| Perspective | Task | Inputs | Outputs | Paper table count |
| --- | --- | --- | --- | ---: |
| P-I | Language-guided segmentation | Image + text | Text + mask | 254,774 |
| P-II | Visual prompt perceiving | Image + text + point/box | Text + mask | 254,584 |
| P-III | Response–segmentation alignment | Image + complex question | Grounded answer + mask | 182,498 |
| P-IV | Visual prompt assisted QA | Image + question + point/box | Grounded answer + mask | 180,734 |
| **Total** |  |  |  | **872,590** |

The paper describes MIMOSeg as a **895K-sample** dataset, while supplementary Table 6 enumerates **872,590** samples. The public release will state its exact record count and document any filtering, deduplication, or version differences.

### Modalities

CT, MRI, dermoscopy, PET, endoscopy, X-ray, ultrasound, and fundus photography.

### Paper split statistics

| Split | Samples |
| --- | ---: |
| Train | 859,003 |
| Validation | 6,912 |
| Test | 6,675 |
| **Total** | **872,590** |

## Dataset

Download MIMOSeg from [ModelScope](https://modelscope.cn/models/heavenbird/MIMOSeg).

## Data format

See [docs/SCHEMA.md](docs/SCHEMA.md) for the proposed JSONL record format. The final schema will be versioned and validated before release.

## License

Licensing is being finalized.

- Source datasets retain their original licenses and terms.
- MIMOSeg annotations will have an explicit license or research-use agreement.
- Code will have a separate software license.
- No single repository-level license should be presented as overriding upstream dataset terms.

See [LICENSES/SOURCE_LICENSE_MATRIX.csv](LICENSES/SOURCE_LICENSE_MATRIX.csv) for the source-by-source audit worksheet.

## Intended use and limitations

MIMO and MIMOSeg are intended solely for research. They are **not medical devices** and are not intended for diagnosis, treatment, patient management, or other clinical decision-making. Generated questions and answers may contain errors, hallucinations, or biases inherited from source data, knowledge resources, and generative models.

Users are responsible for complying with applicable laws, institutional policies, ethics requirements, and every upstream dataset’s terms.

## Citation

```bibtex
@InProceedings{Chen_2025_CVPR,
  author    = {Chen, Yanyuan and Xu, Dexuan and Huang, Yu and Zhan, Songkun and Wang, Hanpin and Chen, Dongxue and Wang, Xueping and Qiu, Meikang and Li, Hang},
  title     = {MIMO: A Medical Vision Language Model with Visual Referring Multimodal Input and Pixel Grounding Multimodal Output},
  booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
  year      = {2025},
  pages     = {24732--24741}
}
```

## Contact

For questions about the dataset, please open a GitHub issue. Add the preferred maintainer email here if direct contact is desired.
