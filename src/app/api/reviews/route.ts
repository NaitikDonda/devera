import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs, query, orderBy, Timestamp } from 'firebase/firestore';

interface Review {
  id: string;
  name: string;
  rating: number;
  review: string;
  date: string;
  createdAt: Timestamp;
}

export async function GET() {
  try {
    const reviewsRef = collection(db, 'reviews');
    const q = query(reviewsRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const reviews: Review[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      reviews.push({
        id: doc.id,
        name: data.name,
        rating: data.rating,
        review: data.review,
        date: data.date,
        createdAt: data.createdAt,
      });
    });

    return NextResponse.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, rating, review } = body;

    if (!name || !rating || !review) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const reviewsRef = collection(db, 'reviews');
    const newReview = {
      name,
      rating,
      review,
      date: new Date().toLocaleDateString(),
      createdAt: Timestamp.now(),
    };

    const docRef = await addDoc(reviewsRef, newReview);

    return NextResponse.json(
      { id: docRef.id, ...newReview },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting review:', error);
    return NextResponse.json(
      { error: 'Failed to submit review' },
      { status: 500 }
    );
  }
}
