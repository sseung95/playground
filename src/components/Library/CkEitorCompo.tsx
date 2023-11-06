import React from 'react';
import styled from '@emotion/styled';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';

const CkEitorCompo = () => {
  const uploadAdapter = (loader: any) => {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          loader.file.then((file: any) => {
            resolve({
              default:
                'https://ichef.bbci.co.uk/news/640/cpsprodpb/9352/production/_126241773_gettyimages-1307789912-1.jpg',
              dataId: 1234,
              url: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/9352/production/_126241773_gettyimages-1307789912-1.jpg',
            });
          });
        });
      },
    };
  };
  const uploadPlugin = (editor: any) => {
    editor.plugins.get('FileRepository').createUploadAdapter = (
      loader: any
    ) => {
      return uploadAdapter(loader);
    };
  };

  const attrPlugin = (editor: any) => {
    editor.plugins
      .get('ImageUploadEditing')
      .on('uploadComplete', (evt: any, { data, imageElement }: any) => {
        editor.model.change((writer: any) => {
          console.log(writer);

          writer.setAttribute('dataId', data.dataId, imageElement);
          // writer.setAttribute('url', data.url, imageElement);
          console.log(writer);
        });

        editor.model.schema.extend('imageBlock', { allowAttributes: 'dataId' });
        editor.model.schema.extend('imageInline', {
          allowAttributes: 'dataId',
        });
        editor.model.schema.extend('imageBlock', { allowAttributes: 'url' });
        editor.model.schema.extend('imageInline', { allowAttributes: 'url' });

        editor.conversion.for('upcast').attributeToAttribute({
          view: 'data-id',
          model: 'dataId',
        });
        editor.conversion.for('upcast').attributeToAttribute({
          view: 'url',
          model: 'url',
        });
        editor.conversion.for('downcast').add((dispatcher: any) => {
          dispatcher.on(
            'attribute:dataId:imageBlock',
            (evt: any, data: any, conversionApi: any) => {
              if (!conversionApi.consumable.consume(data.item, evt.name)) {
                return;
              }
              const viewWriter = conversionApi.writer;
              const figure = conversionApi.mapper.toViewElement(data.item);
              const img = figure.getChild(0);
              if (data.attributeNewValue !== null) {
                viewWriter.setAttribute('data-id', data.attributeNewValue, img);
              } else {
                viewWriter.removeAttribute('data-id', img);
              }
            }
          );
          dispatcher.on(
            'attribute:dataId:imageInline',
            (evt: any, data: any, conversionApi: any) => {
              if (!conversionApi.consumable.consume(data.item, evt.name)) {
                return;
              }
              const viewWriter = conversionApi.writer;
              const figure = conversionApi.mapper.toViewElement(data.item);
              const img = figure.getChild(0);
              if (data.attributeNewValue !== null) {
                viewWriter.setAttribute('data-id', data.attributeNewValue, img);
              } else {
                viewWriter.removeAttribute('data-id', img);
              }
            }
          );
          dispatcher.on(
            'attribute:url:imageBlock',
            (evt: any, data: any, conversionApi: any) => {
              if (!conversionApi.consumable.consume(data.item, evt.name)) {
                return;
              }
              const viewWriter = conversionApi.writer;
              const figure = conversionApi.mapper.toViewElement(data.item);
              const img = figure.getChild(0);
              if (data.attributeNewValue !== null) {
                viewWriter.setAttribute('url', data.attributeNewValue, img);
              } else {
                viewWriter.removeAttribute('url', img);
              }
            }
          );
          dispatcher.on(
            'attribute:url:imageInline',
            (evt: any, data: any, conversionApi: any) => {
              if (!conversionApi.consumable.consume(data.item, evt.name)) {
                return;
              }
              const viewWriter = conversionApi.writer;
              const figure = conversionApi.mapper.toViewElement(data.item);
              const img = figure.getChild(0);
              if (data.attributeNewValue !== null) {
                viewWriter.setAttribute('url', data.attributeNewValue, img);
              } else {
                viewWriter.removeAttribute('url', img);
              }
            }
          );
        });
      });
  };

  return (
    <EditorWrapper>
      <CKEditor
        editor={Editor}
        data="<p>Hello from CKEditor 5!</p>"
        config={{
          extraPlugins: [uploadPlugin, attrPlugin],
        }}
      />
    </EditorWrapper>
  );
};

export default CkEitorCompo;

const EditorWrapper = styled.div`
  .ck-editor__editable,
  .ck-source-editing-area {
    height: 500px;
    min-height: 500px;
  }
`;
