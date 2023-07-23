import { NextResponse } from "next/server"

const posts = [
  {
    "title": "Getting Started with Programming",
    "slug": "getting-started-with-programming",
    "content": "Programming is an exciting skill to learn. It allows you to create software..."
  },
  {
    "title": "The Benefits of Regular Exercise",
    "slug": "benefits-of-regular-exercise",
    "content": "Regular exercise has numerous health benefits, including improved cardiovascular health..."
  },
  {
    "title": "Traveling on a Budget",
    "slug": "traveling-on-a-budget",
    "content": "Traveling doesn't have to be expensive. With careful planning and budgeting..."
  },
  {
    "title": "Delicious and Nutritious Smoothie Recipes",
    "slug": "delicious-and-nutritious-smoothie-recipes",
    "content": "Smoothies are a great way to pack in nutrients while enjoying a delicious..."
  }
]

export async function GET() {
  return NextResponse.json(posts)
}