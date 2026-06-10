'use client';

import { useState } from 'react';
import { Star, User } from 'lucide-react';

function RatingBar({ stars, count, total }) {
  const pct = total > 0 ? (count / total) * 100 : 0;
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="w-3 text-gray-600">{stars}</span>
      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-primary-pink rounded-full" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export default function ProductReviews({ reviews, rating, totalReviews }) {
  const [showForm, setShowForm] = useState(false);

  const distribution = [5, 4, 3, 2, 1].map(stars => ({
    stars,
    count: reviews.filter(r => r.rating === stars).length,
  }));

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Reviews &amp; Ratings ({totalReviews})
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="flex flex-col items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-pink-50 flex items-center justify-center mb-2">
            <div className="flex gap-0.5">
              {[...Array(3)].map((_, i) => (
                <Star key={i} size={20} className="fill-primary-pink text-primary-pink" />
              ))}
            </div>
          </div>
          <span className="text-3xl font-bold text-gray-900">{rating}</span>
          <span className="text-sm text-gray-500">out of 5</span>
        </div>

        <div className="md:col-span-2 flex flex-col justify-center gap-1.5">
          {distribution.map(d => (
            <RatingBar key={d.stars} stars={d.stars} count={d.count} total={reviews.length} />
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setShowForm(f => !f)}
        className="w-full md:w-auto px-8 py-3 border-2 border-gray-800 rounded-lg font-medium hover:bg-gray-50 transition mb-8"
      >
        Write a review
      </button>

      {showForm && (
        <div className="bg-gray-50 rounded-lg p-6 mb-8 text-center text-gray-500 text-sm">
          Review submission coming soon.
        </div>
      )}

      <div className="space-y-6">
        {reviews.map(review => (
          <div key={review.id} className="border-b border-gray-100 pb-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                <User size={20} className="text-orange-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-semibold text-gray-900">{review.author}</span>
                  <span className="text-xs text-gray-400">{review.date}</span>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < review.rating
                          ? 'fill-primary-pink text-primary-pink'
                          : 'text-gray-300'
                      }
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
