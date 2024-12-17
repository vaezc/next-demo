const Detail = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/detail`);
  const json = await data.json();

  return (
    <div>
      <pre>
        {/* 使用 JSON.stringify 格式化显示数据 */}
        {JSON.stringify(json, null, 2)}
      </pre>
      <div>额外内容：12132</div>
    </div>
  );
};

export default Detail;
