import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class Extend extends Plugin {
  static get pluginName() {
    return 'Extend';
  }

  updateSchema() {
    const schema = this.editor.model.schema;

    schema.register('imageClassAttribute', {
      isBlock: false,
      isInline: false,
      isObject: true,
      isSelectable: false,
      isContent: true,
      allowWhere: 'imageInline',
    });

    schema.extend('imageInline', {
      allowAttributes: ['imageClassAttribute'],
    });
  }

  init() {
    const editor = this.editor;
    this.updateSchema();
    this.setupConversion();
  }

  setupConversion() {
    const editor = this.editor;
    const t = editor.t;
    const conversion = editor.conversion;

    conversion.for('upcast').attributeToAttribute({
      view: 'class',
      model: 'imageClassAttribute',
    });

    conversion.for('dataDowncast').attributeToAttribute({
      view: 'class',
      model: 'imageClassAttribute',
    });

    conversion.for('editingDowncast').add(
      // Custom conversion helper
      (dispatcher) =>
        dispatcher.on(
          'attribute:imageClassAttribute:imageInline',
          (evt, data, { writer, consumable, mapper }) => {
            if (!consumable.consume(data.item, evt.name)) {
              return;
            }
            const imageContainer = mapper.toViewElement(data.item);
            const imageElement = imageContainer.getChild(0);
            if (data.attributeNewValue !== null) {
              writer.setAttribute(
                'class',
                data.attributeNewValue,
                imageElement
              );
            } else {
              writer.removeAttribute('class', imageElement);
            }
          }
        )
    );
  }
}
