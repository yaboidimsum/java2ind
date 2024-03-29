"use client";

import Card from "@/components/Card";
import InputField from "@/components/InputField";
import { useState } from "react";

const Page = () => {
	const [translatedText, setTranslatedText] = useState("");

	const handleTranslate = (translation) => {
		setTranslatedText(translation);
	};

	return (
		<>
			<section id="translate">
				<div className="min-h-screen">
					<div className="flex min-h-screen items-center justify-center">
						<div className="flex items-center w-[48rem]">
							<div className="flex flex-col gap-8">
								<div className="flex flex-col gap-4">
									<h2 className="text-3xl font-semibold text-slate-700">
										What is Java2Ind?
									</h2>
									<p className="text max-w-4xl text-justify">
										Java2Ind is a final project of{" "}
										<span className="font-bold">
											Knowledge Based System
										</span>{" "}
										that aims to translate Javanese
										sentences into Indonesian sentences.
										This project is developed to{" "}
										<span className="font-bold">
											improve the quality of
											Javanese-Indonesian translation.
										</span>
									</p>
								</div>
								<div className="flex flex-col gap-4">
									<h2 className="text-2xl font-semibold text-slate-700">
										Try Our Model:
									</h2>
									<InputField
										placeholder="Teks Jowo"
										handleTranslate={handleTranslate}
									/>
								</div>
								<div className="flex flex-col gap-4">
									<h2 className="text-2xl font-semibold text-slate-700">
										Translated Text:
									</h2>
									{translatedText !== "loading" ? (
										<p>
											{translatedText ? (
												translatedText
											) : (
												<span className="text-gray-400">Your translation..</span>
											)}
										</p>
									) : (
										<div className="animate-pulse bg-gray-300 h-4 w-1/3 rounded-full"></div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="introduction" className="pt-5">
				<div className="min-h-screen bg-[#4285F4]">
					<div className="flex min-h-screen items-center justify-center">
						<div className="flex flex-col items-center justify-center gap-16">
							<h2 className="text-6xl font-bold text-white">
								DeDiDa Team
							</h2>
							<p className="max-w-[65rem] text-center text-lg font-medium text-white">
								Cheers to the incredible DeDiDa Team! 🌟
								Transforming ideas into reality, these amazing
								people are bridging languages, from Javanese to
								Indonesian, and shaping the future. 🚀🌐 Still
								in development, but already rocking the game!
							</p>
							<div className="flex flex-row items-center justify-center gap-24">
								<Card
									image="/img/dar.png"
									name="Darren Prasetya"
									title="Lead Project & Researcher"
								/>
								<Card
									image="/img/awan.png"
									name="Dimas Prihady S."
									title="Web Developer & Researcher"
								/>
								<Card
									image="/img/dew.png"
									name="Dewangga Dhika D."
									title="Data Provider & Researcher"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Page;
