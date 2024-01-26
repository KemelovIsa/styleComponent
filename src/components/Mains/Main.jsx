import React, { useState } from "react";
import "./Main.module.css";

const data = [
	{
		id: 1,
		img: "https://s2.vcdn.biz/static/f/1346643471/image-movie-big.jpg",
		name: "Bum Bum",
		nameG: "Комедии",
	},
	{
		id: 2,
		img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/59acece0-e900-4914-aa8a-ec5f42026a64/600x900",
		name: "Hello World",
		nameG: "Комедии",
	},
	{
		id: 3,
		img: "https://thumbs.dfs.ivi.ru/storage4/contents/1/8/804818223a311f27f5eec4c3262d7e.jpg",
		name: "Hello Mississippi",
		nameG: "Комедии",
	},
	{
		id: 4,
		img: "https://m.media-amazon.com/images/M/MV5BY2QwODA2OTQtNDFkNS00MzY5LTljNTAtZmIwNjk3NmY5NDJkXkEyXkFqcGdeQXVyMTc0MjEyODU@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
		name: "One Two Three",
		nameG: "Фантастика",
	},
	{
		id: 5,
		img: "https://fantasticfilms.ie/wp-content/uploads/2021/04/8_184b7cb84d7b456c96a0bdfbbeaa5f14_s-620x430.jpg",
		name: "U+Casts",
		nameG: "Фантастика",
	},
	{
		id: 6,
		img: "https://fantasticfilms.ie/wp-content/uploads/2021/09/yanmm-2021.jpg",
		name: "You are not my mother",
		nameG: "Фантастика",
	},
	{
		id: 7,
		img: "https://thumbs.dfs.ivi.ru/storage29/contents/4/d/e619aec7d455c4942217b4bbd8e938.jpg",
		name: "Voina",
		nameG: "Боевики",
	},
	{
		id: 8,
		img: "https://i.ytimg.com/vi/7KBZmi3nWy8/sddefault.jpg",
		name: "Ispolnitel",
		nameG: "Боевики",
	},

	{
		id: 10,
		img: "https://tkr-info.ru/uploads/articles/image-m2id5840.jpg",
		name: "Home",
		nameG: "Ужасы",
	},
	{
		id: 11,
		img: "https://cs12.pikabu.ru/post_img/big/2022/05/17/8/165279035814259836.jpg",
		name: "Proklation",
		nameG: "Ужасы",
	},
	{
		id: 12,
		img: "https://thumbs.dfs.ivi.ru/storage29/contents/0/a/ff451c3f55abf19a046bb3dc5b67f3.jpg",
		name: "One two three Come on",
		nameG: "Ужасы",
	},
];




const Main = () => {
	const [todo, setTodo] = useState(data);
	const [genre, setGenre] = useState("");

	const changeGenre = (e) => {
		setGenre(e.target.value);

		console.log(e.target.value);

		if (e.target.value === "Все") {
			setTodo(data);
		} else {
			const filteredTodo = data.filter((todo) => todo.nameG === e.target.value);
			setTodo(filteredTodo);
		}
	};

	return (
		<div>
			<select className="main" onChange={changeGenre} value={genre}>
				<option value="Все">Все</option>
				<option value="Комедии">Комедии</option>
				<option value="Фантастика">Фантастика</option>
				<option value="Боевики">Боевики</option>
				<option value="Ужасы">Ужасы</option>
			</select>
			<div className="Photo">
				{todo.map((item) => {
					return (
						<div className="text" key={item.id}>
							{item.nameG}
							<img src={item.img} alt="" />
							<p>{item.name}</p>
							<p>{item.nameG}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Main;
