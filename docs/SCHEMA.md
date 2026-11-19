# Proposed MIMOSeg Record Schema

This is a release-ready starting point, not a claim about the current internal format. Freeze it as `schema_version: "1.0"` only after validating it against every released record.

## JSONL example

```json
{
  "schema_version": "1.0-draft",
  "sample_id": "mimoseg_p2_source_000001",
  "source": {
    "dataset": "SOURCE_DATASET_NAME",
    "source_record_id": "UPSTREAM_OR_STABLE_DERIVED_ID",
    "license_id": "TBD",
    "image_redistributed": false
  },
  "media": {
    "modality": "CT",
    "image_path": null,
    "image_sha256": null,
    "height": 512,
    "width": 512,
    "channels": 1
  },
  "perspective": 2,
  "split": "train",
  "prompt": {
    "text": "Please segment the organs or lesions within the bounding box.",
    "visual": {
      "type": "box",
      "coordinate_system": "pixel_xyxy",
      "value": [112, 84, 327, 401]
    }
  },
  "response": {
    "text": "The segmentation result is the liver and is shown in the image.",
    "entities": [
      {
        "entity_id": "e1",
        "text": "liver",
        "character_span": [31, 36],
        "label": "liver",
        "mask_path": "masks/mimoseg_p2_source_000001_e1.png",
        "mask_sha256": "TBD"
      }
    ]
  },
  "generation": {
    "method": "template",
    "model": null,
    "prompt_version": "p2-template-v1"
  },
  "quality": {
    "automated_checks": ["schema", "mask_nonempty", "bounds"],
    "manual_reviewed": false
  }
}
```

## Required decisions before release

- Choose one coordinate convention and document whether endpoints are inclusive.
- Define mask encoding, foreground values, compression, and overlap behavior.
- Specify how 3D volumes, slices, video frames, and multi-channel images are represented.
- Preserve stable source identifiers without exposing personal information.
- State how multiple entities and multiple masks are ordered and aligned to text.
- Include a source-license identifier on every record or resolvable source manifest.
- Define whether paths point to bundled files, upstream files, or locally generated files.
- Version prompts, generation models, and post-processing.
