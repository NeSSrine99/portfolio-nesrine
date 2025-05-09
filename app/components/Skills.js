const Skills = ({
  skills,
  showPercentage = false,
  showName = true,
  iconColor = "text-blue-500", // يمكنك تغييره عند الاستدعاء
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {skills.map((skill) => {
        const Icon = skill.icon;
        return (
          <div
            key={skill.id}
            className="flex flex-col items-center p-4 shadow-xl  "
          >
            <div className={`text-4xl ${iconColor} mb-2`}>
              <Icon />
            </div>
            {showName && <p>{skill.name}</p>}
            {showPercentage && (
              <div className="w-full mt-2">
                <div className="w-full h-2 bg-gray-200 rounded">
                  <div
                    className="h-2 bg-blue-500 rounded"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-600 text-center">
                  {skill.percentage}%
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
