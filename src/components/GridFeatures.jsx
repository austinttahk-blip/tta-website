import { CourseCardGrid, aviationCourses } from "./CourseCardGrid";

export function GridFeatures() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
          Our Aviation Courses
        </h2>
        <CourseCardGrid courses={aviationCourses} />
      </div>
    </section>
  );
}
