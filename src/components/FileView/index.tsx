import { Resizable } from 're-resizable';

export const FileView = () => {
  return (
    <Resizable
      defaultSize={{
        width: '30%',
      }}
      minWidth={200}
      maxWidth={400}
      className="min-h-screen min-w-20 flex justify-between border-2 border-gray-300 bg-gray-100"
    >
      <div className="mr-2 p-2">
        <h1>Enigma Notes</h1>
        <h2>File View</h2>
        <p>data</p>
        <p>data</p>
        <p>data</p>
        <p>data</p>
      </div>
    </Resizable>
  );
};
