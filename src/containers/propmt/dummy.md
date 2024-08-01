// @description 이미지 수정이 잘 안되어서 사용 안함
// const handleUpdateImage = async (translatedText: string) => {
// try {
// if (!enteredPrompt.length) {
// return;
// }

// const imageBase64Src = getBase64ImageStr(`image_${selectedMessage?.id}`);
// addChat({
// text: enteredPrompt,
// id: enteredPrompt,
// });
// setEnteredPrompt("");
// const res = await fetch("/api/image-editor", {
// method: "POST",
// headers: {
// "Content-Type": "application/json",
// },
// body: JSON.stringify({
// prompt: translatedText,
// image: imageBase64Src,
// }),
// });

// const { data } = await res.json();

// if (!!data?.id) {
// addChat({
// image: data?.images?.[0]?.image ?? "",
// id: data.id,
// });
// }
// } catch (exception) {
// setToastMessage("에러가 발생했습니다.");
// console.error(`[handleUpdateImage] - ${exception}`);
// } finally {
// setIsLoading(false);
// }
// };

const getBase64ImageStr = (imageId: string) => {
const imageElement = document.getElementById(imageId) as HTMLImageElement;
//type 방어
if (!imageElement) {
return;
}

    return imageElement.src.replace("data:image/jpeg;base64,", "");

};
