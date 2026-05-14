export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  intro: string;
  conditions: string[];
  treatmentApproach: { step: string; detail: string }[];
  benefits: string[];
  relatedSlugs: string[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "orthopedic-rehabilitation",
    title: "Orthopedic Rehabilitation",
    tagline: "Expert recovery for joints, muscles and bones",
    description:
      "Joint, muscle and bone recovery care for lasting mobility and sustained pain relief.",
    intro:
      "Our orthopedic rehabilitation program addresses injuries and conditions affecting the musculoskeletal system — bones, joints, muscles, ligaments and tendons. Using evidence-based techniques and personalised treatment plans, we help you restore function, reduce pain and return to the activities that matter most to you.",
    conditions: [
      "Joint pain and stiffness",
      "Muscle injuries and strains",
      "Ligament and tendon injuries",
      "Osteoarthritis",
      "Hip and knee conditions",
      "Shoulder impingement and rotator cuff injuries",
      "Post-fracture recovery",
    ],
    treatmentApproach: [
      {
        step: "Comprehensive Assessment",
        detail:
          "Detailed movement analysis, strength testing and pain evaluation to identify the root cause of your condition.",
      },
      {
        step: "Personalised Treatment Plan",
        detail:
          "A structured rehabilitation program tailored to your specific injury, goals and recovery timeline.",
      },
      {
        step: "Manual Therapy",
        detail:
          "Hands-on joint mobilisation and soft tissue techniques to reduce pain and restore range of motion.",
      },
      {
        step: "Progressive Exercise",
        detail:
          "Graded strengthening and stabilisation exercises that rebuild function safely over time.",
      },
      {
        step: "Functional Recovery",
        detail:
          "Return-to-activity training to ensure you recover fully and confidently resume daily life.",
      },
    ],
    benefits: [
      "Reduced pain and inflammation",
      "Improved joint mobility and range of motion",
      "Restored functional movement",
      "Stronger supporting muscles",
      "Reduced risk of re-injury",
      "Return to full daily activities",
    ],
    relatedSlugs: [
      "sports-injury-rehabilitation",
      "manual-therapy",
      "post-surgery-rehabilitation",
    ],
  },
  {
    slug: "sports-injury-rehabilitation",
    title: "Sports Injury Rehabilitation",
    tagline: "Return to performance with confidence",
    description:
      "Return to sport with expert guidance and a structured performance recovery program.",
    intro:
      "Our sports rehabilitation program is designed for athletes and active individuals who want to recover fully and return to peak performance. We combine clinical expertise with sport-specific training to ensure you come back stronger, not just recovered.",
    conditions: [
      "Muscle pulls and strains",
      "Ligament sprains (ACL, MCL)",
      "Tendinopathies and tendon injuries",
      "Stress fractures",
      "Shoulder and rotator cuff injuries",
      "Ankle instability",
      "Runner's knee and patellofemoral pain",
    ],
    treatmentApproach: [
      {
        step: "Sport-Specific Assessment",
        detail:
          "A thorough evaluation of your injury within the context of your sport and performance demands.",
      },
      {
        step: "Injury Staging",
        detail:
          "Accurate grading of injury severity to ensure optimal pacing of your rehabilitation program.",
      },
      {
        step: "Manual Therapy",
        detail:
          "Soft tissue techniques and joint mobilisation to accelerate tissue healing.",
      },
      {
        step: "Strength Rehabilitation",
        detail:
          "Progressive resistance training targeting the injury site and all supporting structures.",
      },
      {
        step: "Return-to-Sport Testing",
        detail:
          "Validated functional testing to confirm your full readiness for training and competition.",
      },
    ],
    benefits: [
      "Full return to sport and training",
      "Improved performance resilience",
      "Significantly reduced re-injury risk",
      "Sport-specific strength gains",
      "Restored confidence in movement",
      "Evidence-based recovery timeline",
    ],
    relatedSlugs: [
      "orthopedic-rehabilitation",
      "exercise-therapy",
      "mobility-strength-recovery",
    ],
  },
  {
    slug: "pelvic-floor-rehabilitation",
    title: "Pelvic Floor Rehabilitation",
    tagline: "Sensitive, specialised care for pelvic health",
    description:
      "Specialised pelvic care for women and men using sensitive, evidence-based methods.",
    intro:
      "Our pelvic floor rehabilitation program provides sensitive, evidence-based treatment for both women and men experiencing pelvic floor dysfunction. Delivered with complete professionalism and discretion, our specialist-led care addresses a wide range of conditions that significantly affect quality of life.",
    conditions: [
      "Urinary incontinence and urgency",
      "Pelvic organ prolapse",
      "Post-natal pelvic floor weakness",
      "Pelvic pain",
      "Diastasis recti",
      "Bladder urgency and frequency",
      "Post-prostatectomy recovery",
    ],
    treatmentApproach: [
      {
        step: "Confidential Assessment",
        detail:
          "A respectful, discreet initial consultation to understand your symptoms and goals in a safe environment.",
      },
      {
        step: "Pelvic Floor Evaluation",
        detail:
          "Internal and external assessment techniques to accurately identify muscle function and dysfunction.",
      },
      {
        step: "Individualised Treatment Plan",
        detail:
          "A tailored program targeting your specific pelvic floor condition and recovery goals.",
      },
      {
        step: "Muscle Retraining",
        detail:
          "Evidence-based pelvic floor strengthening and coordination exercises.",
      },
      {
        step: "Lifestyle and Education",
        detail:
          "Guidance on posture, breathing, diet and daily habits that support long-term pelvic health.",
      },
    ],
    benefits: [
      "Restored bladder and bowel control",
      "Reduced pelvic pain and discomfort",
      "Improved quality of daily life",
      "Safe return to exercise and activity",
      "Post-natal recovery support",
      "Long-term pelvic health management",
    ],
    relatedSlugs: ["orthopedic-rehabilitation", "manual-therapy", "exercise-therapy"],
  },
  {
    slug: "manual-therapy",
    title: "Manual Therapy",
    tagline: "Hands-on treatment for pain relief and mobility",
    description:
      "Hands-on treatment to restore movement, reduce pain and improve musculoskeletal function.",
    intro:
      "Manual therapy uses skilled, hands-on clinical techniques to diagnose and treat musculoskeletal pain and movement restrictions. Our physiotherapists apply targeted mobilisation and soft tissue methods to restore function and provide meaningful, lasting pain relief.",
    conditions: [
      "Spinal stiffness and pain",
      "Joint restrictions and limited mobility",
      "Muscle tightness and chronic tension",
      "Headaches of cervicogenic origin",
      "Hip and shoulder mobility issues",
      "Post-surgical joint stiffness",
      "Nerve-related pain and sensitivity",
    ],
    treatmentApproach: [
      {
        step: "Postural and Movement Assessment",
        detail:
          "Evaluation of movement patterns and postural alignment to identify contributing factors to your pain.",
      },
      {
        step: "Joint Mobilisation",
        detail:
          "Precise passive movements applied to joints to restore range and reduce stiffness.",
      },
      {
        step: "Soft Tissue Techniques",
        detail:
          "Targeted massage and myofascial release to reduce muscle tension and improve tissue quality.",
      },
      {
        step: "Neural Mobilisation",
        detail:
          "Gentle techniques to improve nerve mobility and reduce referred pain or tingling.",
      },
      {
        step: "Home Exercise Program",
        detail:
          "Prescribed exercises to support treatment gains and prevent recurrence between sessions.",
      },
    ],
    benefits: [
      "Immediate pain reduction",
      "Improved range of motion",
      "Relaxed muscle tension",
      "Better posture and alignment",
      "Reduced nerve sensitivity",
      "Enhanced overall movement quality",
    ],
    relatedSlugs: [
      "orthopedic-rehabilitation",
      "back-neck-pain-treatment",
      "dry-needling",
    ],
  },
  {
    slug: "post-surgery-rehabilitation",
    title: "Post-Surgery Rehabilitation",
    tagline: "Safe, progressive recovery after surgery",
    description:
      "Safe, progressive recovery after surgical procedures guided by personalised treatment plans.",
    intro:
      "Our post-surgery rehabilitation program provides structured, expert-guided recovery following orthopaedic and other surgical procedures. We work in alignment with your surgical team to deliver safe, progressive rehabilitation that restores function and protects your surgical results.",
    conditions: [
      "Total hip and knee replacement",
      "ACL reconstruction recovery",
      "Rotator cuff repair",
      "Spinal surgery recovery",
      "Shoulder stabilisation surgery",
      "Fracture fixation and repair",
      "Soft tissue repair surgeries",
    ],
    treatmentApproach: [
      {
        step: "Surgeon-Aligned Protocol",
        detail:
          "Rehabilitation designed in coordination with your surgical procedure and your surgeon's guidelines.",
      },
      {
        step: "Post-Operative Management",
        detail:
          "Early swelling management, wound care education and initial mobility work.",
      },
      {
        step: "Progressive Mobility",
        detail:
          "Carefully staged range of motion work respecting tissue healing timeframes.",
      },
      {
        step: "Strengthening Programme",
        detail:
          "Graded loading and stabilisation exercises to restore muscle function progressively.",
      },
      {
        step: "Return-to-Function Milestones",
        detail:
          "Clear functional goals and outcome measures to track progress and guide discharge.",
      },
    ],
    benefits: [
      "Safe and structured surgical recovery",
      "Reduced scar tissue and adhesion formation",
      "Restored joint and muscle function",
      "Minimised risk of complications",
      "Faster return to independence",
      "Confidence through measurable milestones",
    ],
    relatedSlugs: ["orthopedic-rehabilitation", "manual-therapy", "exercise-therapy"],
  },
  {
    slug: "back-neck-pain-treatment",
    title: "Back & Neck Pain Treatment",
    tagline: "Evidence-based care for spinal pain",
    description:
      "Evidence-based treatment for chronic and acute spinal pain conditions affecting daily life.",
    intro:
      "Back and neck pain are among the most common conditions affecting quality of life. Our specialist spinal treatment program targets the root cause of your pain using evidence-based physiotherapy — not just symptom management — to deliver lasting recovery and long-term self-management skills.",
    conditions: [
      "Lower back pain (acute and chronic)",
      "Cervical neck pain and stiffness",
      "Herniated and bulging discs",
      "Sciatica and nerve pain",
      "Postural pain syndromes",
      "Whiplash injuries",
      "Spondylosis and degenerative changes",
    ],
    treatmentApproach: [
      {
        step: "Detailed Spinal Assessment",
        detail:
          "Comprehensive evaluation of spinal mechanics, nerve function and contributing postural factors.",
      },
      {
        step: "Postural Correction",
        detail:
          "Ergonomic advice and postural retraining to address the structural cause of spinal stress.",
      },
      {
        step: "Manual Therapy",
        detail:
          "Targeted joint mobilisation and soft tissue techniques for immediate pain relief and mobility.",
      },
      {
        step: "Spinal Stabilisation",
        detail:
          "Core strengthening and stabilisation exercise program tailored to your specific spinal condition.",
      },
      {
        step: "Self-Management Education",
        detail:
          "Pain science education and long-term self-management strategies to prevent recurrence.",
      },
    ],
    benefits: [
      "Significant reduction in pain levels",
      "Restored spinal mobility and flexibility",
      "Improved posture and alignment",
      "Reduced nerve pain and tingling",
      "Better daily function and sleep quality",
      "Long-term self-management skills",
    ],
    relatedSlugs: ["manual-therapy", "dry-needling", "exercise-therapy"],
  },
  {
    slug: "dry-needling",
    title: "Dry Needling",
    tagline: "Targeted release for muscle tension and pain",
    description: "Targeted muscle tension relief using precision needling techniques.",
    intro:
      "Dry needling is a specialist physiotherapy technique used to release myofascial trigger points — hyper-irritable spots in muscle tissue that cause local and referred pain. Our clinicians use fine monofilament needles to deactivate these trigger points and accelerate tissue recovery.",
    conditions: [
      "Myofascial trigger points",
      "Chronic muscle tension and tightness",
      "Sports injury related muscle soreness",
      "Tension headaches and migraines",
      "Lower back and neck muscle pain",
      "Upper trapezius and shoulder blade tightness",
      "Post-exercise muscle soreness",
    ],
    treatmentApproach: [
      {
        step: "Trigger Point Assessment",
        detail:
          "Systematic palpation and mapping of active myofascial trigger points contributing to your symptoms.",
      },
      {
        step: "Precision Needling",
        detail:
          "Fine needle insertion into targeted muscle tissue to elicit a localised twitch response and release the trigger point.",
      },
      {
        step: "Integration with Therapy",
        detail:
          "Dry needling is combined with manual therapy and rehabilitation for optimal outcomes.",
      },
      {
        step: "Post-Needling Exercises",
        detail:
          "Corrective exercises prescribed immediately following needling to consolidate treatment gains.",
      },
      {
        step: "Progress Reassessment",
        detail:
          "Regular evaluation of treatment response to adjust and progress the needling program.",
      },
    ],
    benefits: [
      "Rapid muscle tension and pain release",
      "Reduced localised pain and sensitivity",
      "Improved blood flow to muscle tissue",
      "Enhanced overall rehabilitation outcomes",
      "Fewer sessions required with combined approach",
      "Effective for both chronic and acute muscle pain",
    ],
    relatedSlugs: [
      "manual-therapy",
      "back-neck-pain-treatment",
      "sports-injury-rehabilitation",
    ],
  },
  {
    slug: "exercise-therapy",
    title: "Exercise Therapy",
    tagline: "Structured movement for lasting recovery",
    description:
      "Strength and mobility rehabilitation programs tailored to your specific recovery goals.",
    intro:
      "Exercise therapy forms the foundation of lasting rehabilitation. Our evidence-based, individually prescribed exercise programs address strength, mobility, coordination and endurance deficits that result from injury, surgery or chronic conditions — delivering durable outcomes beyond the treatment room.",
    conditions: [
      "General deconditioning and weakness",
      "Musculoskeletal movement deficits",
      "Post-injury rehabilitation",
      "Chronic pain management",
      "Age-related mobility decline",
      "Post-surgical recovery",
      "Sports performance rehabilitation",
    ],
    treatmentApproach: [
      {
        step: "Baseline Assessment",
        detail:
          "Comprehensive strength, mobility and endurance evaluation to establish your starting point.",
      },
      {
        step: "Exercise Prescription",
        detail:
          "Individualised exercise program targeting your specific deficits and recovery goals.",
      },
      {
        step: "Progressive Loading",
        detail:
          "Gradual increase in exercise intensity and complexity based on your body's response.",
      },
      {
        step: "Supervised Sessions",
        detail:
          "In-clinic exercise sessions with real-time coaching and technique correction.",
      },
      {
        step: "Home Program Development",
        detail:
          "Structured take-home exercise plan to maximise recovery progress between appointments.",
      },
    ],
    benefits: [
      "Improved strength and joint stability",
      "Better mobility and flexibility",
      "Enhanced endurance and functional capacity",
      "Reduced pain and injury risk",
      "Sustainable long-term recovery results",
      "Increased confidence in movement",
    ],
    relatedSlugs: [
      "sports-injury-rehabilitation",
      "mobility-strength-recovery",
      "post-surgery-rehabilitation",
    ],
  },
  {
    slug: "mobility-strength-recovery",
    title: "Mobility & Strength Recovery",
    tagline: "Rebuild movement and return to an active life",
    description:
      "Rebuild movement and functional strength to regain your active lifestyle.",
    intro:
      "Our mobility and strength recovery program addresses the movement restrictions, muscular weakness and functional limitations that hold you back from living actively. Whether recovering from injury, surgery or prolonged inactivity, we build a clear pathway back to full function.",
    conditions: [
      "General mobility restrictions",
      "Post-injury stiffness and weakness",
      "Age-related strength decline",
      "Post-surgical functional deficits",
      "Chronic deconditioning",
      "Balance and coordination issues",
      "Post-immobilisation recovery",
    ],
    treatmentApproach: [
      {
        step: "Functional Movement Screen",
        detail:
          "Assessment of movement quality, joint mobility and muscular imbalances affecting your function.",
      },
      {
        step: "Mobility Programme",
        detail:
          "Targeted joint and soft tissue mobility work to restore full range of motion progressively.",
      },
      {
        step: "Progressive Strength Training",
        detail:
          "Graded resistance program rebuilding muscular strength and functional capacity.",
      },
      {
        step: "Balance and Coordination",
        detail:
          "Proprioceptive training to restore movement confidence and reduce fall or re-injury risk.",
      },
      {
        step: "Active Lifestyle Maintenance",
        detail:
          "Long-term home programme designed to sustain and build on recovery gains independently.",
      },
    ],
    benefits: [
      "Restored functional mobility and movement",
      "Improved muscle strength and endurance",
      "Better balance and coordination",
      "Reduced stiffness and daily discomfort",
      "Increased independence in daily activities",
      "Long-term active lifestyle maintenance",
    ],
    relatedSlugs: [
      "exercise-therapy",
      "orthopedic-rehabilitation",
      "sports-injury-rehabilitation",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}
