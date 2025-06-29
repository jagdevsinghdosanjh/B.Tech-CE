# 🎓 B.Tech-CE Repository

Welcome to the **B.Tech Computer Engineering (B.Tech-CE)** repository — a curated, modular, and scalable digital workspace developed by [Jagdev Singh Dosanjh](https://github.com/jagdevsinghdosanjh) to power next-generation **AI-enabled learning environments** under the SmartSchoolAI initiative.

## 📌 Purpose

This repository is designed to serve as the backbone for organizing course materials, quizzes, and AI-assisted teaching tools for **B.Tech Computer Engineering** students. It aligns with the vision of **SmartSchoolAI**: delivering adaptive, interactive, and personalized learning experiences across technical disciplines.

---

## 🧠 Features

- **📚 Organized by Subjects** – Categorized modules for Mathematics, Computer Science, Engineering Physics, and more.
- **🧩 Smart Content Blocks** – Includes JSON-based quizzes, theory outlines, and concept explainers ready to power AI workflows.
- **🤖 AI Integration Ready** – Designed to work seamlessly with tools like Streamlit, FastAPI, and OpenAI APIs.
- **📈 Scalable Modules** – Can be expanded to include new semesters, subjects, and adaptive feedback mechanisms.
- **💡 Reference Aligned** – Content is crafted with academic relevance to B.Tech syllabi (especially for Indian institutions).

---

## 📂 Folder Structure (Preview)

B.Tech-CE/ ├── Mathematics/ │ ├── Matrices/ │ └── Rank-Nullity/ ├── Computer-Programming/ │ └── C_Basics/ ├── Quizzes/ │ ├── matrices_quiz.json │ └── rank_nullity_quiz_set.json ├── README.md


---

## 🚀 Vision: SmartSchoolAI

This repository feeds into the larger **SmartSchoolAI** mission:
> “To empower educators with AI-ready tools and modular digital resources that scale accessibility, personalization, and impact.”

You can read more about connected tools like:
- **BioEd Tutor** – interactive biology explanations via LLMs  
- **Virtual Chemistry Lab** – simulation-driven learning  
- **Streamlit Dashboards** – personalized portals for students and teachers

---

## 🛠 Built With

- [Python](https://python.org/)
- [Streamlit](https://streamlit.io/)
- [OpenAI API](https://platform.openai.com/)
- [FastAPI](https://fastapi.tiangolo.com/)
- JSON, Markdown, and good ol’ pedagogy!

---

## 🤝 Contributions

You're welcome to suggest improvements, raise issues, or collaborate. This is a growing knowledge base — help us make it better for learners everywhere.

---

## 📬 Contact

Maintained by [Jagdev Singh Dosanjh](https://github.com/jagdevsinghdosanjh)  
Faculty, Computer Science — Government School (India)  
Passionate about AI in education | Interdisciplinary learning | Student success

---

> _“True education is not about remembering facts — it’s about building minds that can think, question, and create.”_  
> — SmartSchoolAI Philosophy
## 📘 Mathematics-I (MTL-101) – B.Tech. Computer Engineering

This module forms the mathematical foundation for first-semester students of Computer Engineering, blending linear algebra, calculus, and vector analysis into a toolkit essential for engineering problem solving. The course is divided into four major sections:

---

### 🟦 SECTION A – Matrices and Linear Algebra

> 📊 Total Lectures: 10  
> 📚 Tags: Rank, Inverse, Eigenvalues, Diagonalization, Cayley-Hamilton

#### 🔹 Topics Covered:

- **Introduction to Matrices** – Basic operations, types of matrices, notation.
- **Inverse and Rank of a Matrix** – Elementary transformations, row-echelon form, Gauss-Jordan method.
- **Rank-Nullity Theorem** – Relationship between rank and solution space for homogeneous systems.
- **Symmetric, Skew-Symmetric and Orthogonal Matrices** – Definitions and algebraic properties.
- **Hermitian and Skew-Hermitian Matrices** – Matrices equal to their conjugate transpose (or its negative).
- **Unitary Matrix** – Complex analog to orthogonal matrices.
- **Determinants** – Properties, cofactor expansion, effect of row operations.
- **System of Linear Equations** – Matrix representation and solution methods (Cramer's rule, matrix inverse, row operations).
- **Eigenvalues and Eigenvectors** – Characteristic polynomial, algebraic and geometric multiplicities.
- **Diagonalization** – Conditions, process, and applications.
- **Cayley-Hamilton Theorem** – A matrix satisfies its own characteristic equation; applied to find matrix inverse.

---

### 🟨 SECTION B – Infinite Series

> 📊 Total Lectures: 10  
> 📚 Tags: Convergence, Power Series, Tests, Alternating Series

#### 🔹 Topics Covered:

- **Convergence and Divergence** – Criteria and understanding divergence behavior.
- **Geometric Series Test** – Closed form and convergence criterion.
- **Positive Term Series** – Fundamental behavior and convergence nature.
- **p-Series Test** – Series of the form Σ(1/nᵖ) and its thresholds.
- **Comparison Test** – Direct and limit comparisons with known convergent/divergent series.
- **D’Alembert’s Ratio Test** – Useful for factorial and exponential growth.
- **Cauchy’s Root Test** – Based on nth roots, powerful for power series.
- **Integral Test** – Continuous analog using improper integrals.
- **Raabe’s Test, Logarithmic Test, Gauss’s Test** – More nuanced series evaluations (proofs excluded).
- **Alternating Series & Leibnitz’s Rule** – Alternating convergence and error bounds.
- **Power Series** – Form, manipulation, and function approximation.
- **Radius and Interval of Convergence** – Determining valid input ranges.

---

### 🟥 SECTION C – Differential Calculus (Multivariable)

> 📊 Total Lectures: 12  
> 📚 Tags: Partial Derivatives, Taylor Expansion, Maxima-Minima

#### 🔹 Topics Covered:

- **Partial Derivatives** – Functions of multiple variables, mixed derivatives.
- **Euler’s Theorem** – Homogeneous functions and identity relation.
- **Maclaurin’s and Taylor’s Series** – Expansion of single and multivariable functions.
- **Maxima and Minima of Multivariable Functions** – First and second derivative tests.
- **Lagrange Multiplier Method** – Optimization with constraints.
- **Multiple Integrals** – Double and triple integrals with change of order and limits.
- **Applications** – Surface area and volume calculations using integrals.

---

### 🟩 SECTION D – Vector Calculus

> 📊 Total Lectures: 12  
> 📚 Tags: Gradient, Divergence, Curl, Theorems of Vector Integration

#### 🔹 Topics Covered:

- **Scalar and Vector Fields** – Definitions and field representation.
- **Vector Differentiation** – Limit, derivative, chain rules.
- **Gradient** – Directional rate of change of scalar fields.
- **Divergence and Curl** – Measuring flux density and rotational tendency.
- **Line Integral** – Work done by a vector field along a path.
- **Surface and Volume Integrals** – Generalization of scalar area and volume.
- **Green’s Theorem** – Conversion of line integral to double integral.
- **Stokes’ Theorem** – Relating surface integral of curl to boundary line integral.
- **Gauss’ Divergence Theorem** – Conversion of volume integral of divergence into surface integral (no proofs included).

---

### 🎯 Course Outcomes

By the end of this module, students will:

1. Compute the **rank**, **eigenvalues**, and **inverse** of matrices using the **Cayley-Hamilton Theorem**.
2. Analyze and determine the **convergence** of series using multiple standard tests.
3. Apply **multivariate calculus** to solve optimization problems and compute geometric quantities.
4. Understand and apply **vector field analysis** using gradient, divergence, and curl alongside the major vector integral theorems.

---

### 📘 Recommended Texts

- Louis A. Pipes — *Applied Mathematics for Engineers and Physicists*
- Erwin Kreyszig — *Engineering Mathematics*
- B.S. Grewal — *Higher Engineering Mathematics*

---

🧩 For AI-powered quizzes and topic-wise flashcards based on these sections, check the [`/ChoicedQuiz/quizzes/`](./Quizzes) directory in this repository.

