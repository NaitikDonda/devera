"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Send } from "lucide-react";

interface Review {
  id: number;
  name: string;
  rating: number;
  review: string;
  date: string;
}

export function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    rating: 0,
    review: "",
  });

  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews');
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.rating > 0 && formData.review) {
      try {
        const response = await fetch('/api/reviews', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const newReview = await response.json();
          setReviews([newReview, ...reviews]);
          setFormData({ name: "", rating: 0, review: "" });
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 3000);
        }
      } catch (error) {
        console.error('Failed to submit review:', error);
      }
    }
  };

  return (
    <section className="px-6 py-24 sm:px-8 lg:px-12 bg-devera-teal">
      <div className="mx-auto max-w-[1480px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-white/70">Testimonials</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            What Clients Say
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-white/80">
            Hear from those who've experienced our work firsthand
          </p>
        </motion.div>

        {/* Reviews Grid */}
        {loading ? (
          <div className="text-center text-white/80">Loading reviews...</div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16"
          >
            {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-[1.75rem] border border-slate-200/70 bg-devera-cream p-8 shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < review.rating ? "text-devera-teal fill-devera-teal" : "text-slate-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-base leading-7 text-devera-dark/80 mb-6">
                "{review.review}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-devera-dark">{review.name}</p>
                  <p className="text-sm text-devera-dark/50">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
          </motion.div>
        )}

        {/* Review Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="rounded-[1.75rem] border border-slate-200/70 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-devera-dark mb-6">Leave a Review</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-devera-dark/70 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-slate-200/70 bg-slate-50 px-4 py-3 text-devera-dark placeholder:text-devera-dark/40 focus:border-devera-teal focus:outline-none focus:ring-2 focus:ring-devera-teal/20 transition"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-devera-dark/70 mb-2">
                  Rating
                </label>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: i + 1 })}
                      onMouseEnter={() => setHoveredRating(i + 1)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="transition hover:scale-110"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          i < (hoveredRating || formData.rating)
                            ? "text-devera-teal fill-devera-teal"
                            : "text-slate-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="review" className="block text-sm font-medium text-devera-dark/70 mb-2">
                  Your Review
                </label>
                <textarea
                  id="review"
                  value={formData.review}
                  onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                  rows={4}
                  className="w-full rounded-xl border border-slate-200/70 bg-slate-50 px-4 py-3 text-devera-dark placeholder:text-devera-dark/40 focus:border-devera-teal focus:outline-none focus:ring-2 focus:ring-devera-teal/20 transition resize-none"
                  placeholder="Share your experience with us..."
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-devera-dark px-8 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-white transition hover:bg-devera-teal focus:outline-none focus:ring-2 focus:ring-devera-teal focus:ring-offset-2"
              >
                <Send className="h-4 w-4" />
                {submitted ? "Review Submitted!" : "Submit Review"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
