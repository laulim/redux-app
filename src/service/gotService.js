const downloadJson = async (url) => {
  const data = await fetch(url);
  if (!data.ok) {
    throw new Error (`Could not connect ${url}, status: ${data.status}`)
  }
  return await data.json();
}

const uploadJson = async (url, data) => {
  await fetch(url, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {"Content-Type": "application/json"}
  })
    .then((res) => console.log(res.status))
    .catch((res) => console.error(res.status))
}

export {downloadJson, uploadJson}